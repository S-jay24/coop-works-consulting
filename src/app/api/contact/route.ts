import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

/**
 * Extracts the spreadsheet ID whether the user provides
 * the raw ID or the entire browser URL.
 */
function extractSheetId(input: string): string {
  const match = input.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return match[1];
  }
  return input.trim();
}

/**
 * Loads credentials from process.env with fallback to reading .env.local
 * so changes take effect immediately without needing server restart.
 */
function getGoogleCredentials() {
  let sheet = '';
  let email = '';
  let key = '';

  // Read directly from .env.local on each request so user edits take effect immediately
  if (fs.existsSync(path.join(process.cwd(), '.env.local'))) {
    try {
      const content = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx === -1) continue;
        const k = trimmed.slice(0, eqIdx).trim();
        const v = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (k === 'GOOGLE_SHEET_URL' || k === 'GOOGLE_SHEET_ID') sheet = v;
        if (k === 'GOOGLE_CLIENT_EMAIL') email = v;
        if (k === 'GOOGLE_PRIVATE_KEY') key = v;
      }
    } catch (e) {
      console.error('[Google Credentials Loader Error]:', e);
    }
  }

  // Fallback to process.env if not defined in .env.local
  sheet = sheet || process.env.GOOGLE_SHEET_ID || process.env.GOOGLE_SHEET_URL || '';
  email = email || process.env.GOOGLE_CLIENT_EMAIL || '';
  key = key || process.env.GOOGLE_PRIVATE_KEY || '';

  return { sheet, email, key };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    console.log('[Contact Form Submission]:', { timestamp, name, email, phone, service, message });

    const { sheet: rawSheetInput, email: clientEmail, key: rawPrivateKey } = getGoogleCredentials();
    let privateKey = rawPrivateKey;

    if (rawSheetInput && clientEmail && privateKey && !rawSheetInput.includes('YOUR_SPREADSHEET_ID_HERE')) {
      // Correctly parse escaped \n newlines in private key
      if (privateKey.includes('\\n')) {
        privateKey = privateKey.replace(/\\n/g, '\n');
      }

      const spreadsheetId = extractSheetId(rawSheetInput);

      const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Prefix strings starting with +, =, -, or phone numbers with '
      // so Google Sheets treats them as plain text instead of attempting to parse them as formulas
      const sanitizeCell = (str: string | undefined | null, isPhone = false) => {
        if (!str) return '';
        const trimmed = String(str).trim();
        if (isPhone || trimmed.startsWith('+') || trimmed.startsWith('=') || trimmed.startsWith('-') || trimmed.startsWith('@')) {
          return `'${trimmed}`;
        }
        return trimmed;
      };

      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'A:F',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              timestamp,
              sanitizeCell(name),
              sanitizeCell(email),
              sanitizeCell(phone, true),
              sanitizeCell(service),
              sanitizeCell(message),
            ],
          ],
        },
      });

      console.log('[Google Sheets]: Successfully appended row to Sheet ID:', spreadsheetId);
    } else {
      console.warn('[Google Sheets]: Sheet URL/ID is not set yet in .env.local. Submission recorded to console.');
    }

    return NextResponse.json({ success: true, message: 'Enquiry received successfully' });
  } catch (error: any) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry', details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
