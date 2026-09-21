'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, ExternalLink, Calculator, ChevronRight } from 'lucide-react';

const C={bg:'#F7F1E3',bg2:'#EDE6D6',white:'#FFFFFF',dark:'#1C1813',mid:'#5A4A38',light:'#9A8878',amber:'#C8761A',amberL:'#E8934A',border:'rgba(28,24,19,0.10)',cream:'#F0E8D4'};
const P={red:'#D32F2F',grad:'linear-gradient(135deg,#FFFDF6 0%,#FFF5EB 50%,#FFF0F0 100%)',glass:'rgba(255,255,255,0.75)',glassBdr:'rgba(211,47,47,0.15)',shadow:'0 8px 32px rgba(183,28,28,0.08)',text:'#1C1B1F',muted:'#625B71',success:'#2E7D32',warn:'#ED6C02',info:'#0288D1',font:"'Outfit','Inter',sans-serif",rSm:'8px',rMd:'16px'};
type BC='red'|'green'|'amber'|'blue';
const BM:{[k:string]:[string,string]}={red:[P.red,'rgba(211,47,47,0.1)'],green:[P.success,'rgba(46,125,50,0.1)'],amber:[P.warn,'rgba(237,108,2,0.1)'],blue:[P.info,'rgba(2,136,209,0.1)']};
function PBadge({label,color}:{label:string;color:BC}){const[c,bg]=BM[color];return <span style={{background:bg,color:c,padding:'2px 8px',borderRadius:999,fontSize:'0.65rem',fontWeight:700,fontFamily:P.font,whiteSpace:'nowrap'}}>{label}</span>;}
function PBtn({label,small=false,outline=false,onClick}:{label:string;small?:boolean;outline?:boolean;onClick?:()=>void}){return <button onClick={onClick} style={{background:outline?'transparent':P.red,color:outline?P.text:'white',border:outline?'1px solid rgba(0,0,0,0.15)':'none',borderRadius:P.rSm,padding:small?'0.18rem 0.5rem':'0.38rem 0.85rem',fontWeight:700,fontFamily:P.font,fontSize:small?'0.68rem':'0.78rem',cursor:'pointer',whiteSpace:'nowrap'}}>{label}</button>;}
function PCard({children,style}:{children:React.ReactNode;style?:React.CSSProperties}){return <div style={{background:P.glass,backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',border:`1px solid ${P.glassBdr}`,borderRadius:P.rMd,boxShadow:P.shadow,padding:'0.9rem',...style}}>{children}</div>;}
function PM({icon,label,value,color=P.text}:{icon:string;label:string;value:string;color?:string}){return <div style={{background:'rgba(255,255,255,0.7)',border:'1px solid rgba(0,0,0,0.06)',borderRadius:10,padding:'0.55rem 0.75rem'}}><div style={{fontSize:'0.5rem',fontWeight:700,color:P.muted,textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:2,fontFamily:P.font}}>{icon} {label}</div><div style={{fontSize:'0.95rem',fontWeight:800,color,fontFamily:P.font,lineHeight:1}}>{value}</div></div>;}
function PT({headers,rows}:{headers:string[];rows:(string|React.ReactNode)[][]}){return <div style={{background:'rgba(255,255,255,0.7)',borderRadius:10,border:'1px solid rgba(0,0,0,0.06)',overflowX:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontFamily:P.font,fontSize:'0.68rem'}}><thead><tr style={{background:'rgba(255,255,255,0.9)'}}>{headers.map((h,i)=><th key={i} style={{padding:'0.4rem 0.65rem',textAlign:'left',color:P.muted,fontWeight:700,fontSize:'0.6rem',borderBottom:'1px solid rgba(0,0,0,0.06)',whiteSpace:'nowrap'}}>{h}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i} style={{borderBottom:i<rows.length-1?'1px solid rgba(0,0,0,0.04)':'none',background:i%2===0?'transparent':'rgba(255,255,255,0.3)'}}>{row.map((cell,j)=><td key={j} style={{padding:'0.45rem 0.65rem',color:P.text,verticalAlign:'middle'}}>{cell}</td>)}</tr>)}</tbody></table></div>;}

const GVF={sheds:[{id:'s1',name:'Kamareddy-Shed-A',capacity:8500,rent:12000,elec:4500,water:1800,active:1},{id:'s2',name:'Kamareddy-Shed-B',capacity:7800,rent:11000,elec:4200,water:1600,active:1},{id:'s3',name:'Nizamabad-Shed-1',capacity:9200,rent:14000,elec:5200,water:2100,active:1},{id:'s4',name:'Nizamabad-Shed-2',capacity:8000,rent:12500,elec:4800,water:1900,active:1}],batches:[{id:'b1',name:'GVF-B1',shedName:'Kamareddy-Shed-A',placed:8423,age:42,live:8201,mort:222,mortPct:2.6,avgWt:2210,fcr:1.63,feed:540,startDate:'07/08/2026'},{id:'b2',name:'GVF-B2',shedName:'Kamareddy-Shed-B',placed:7756,age:35,live:7621,mort:135,mortPct:1.7,avgWt:1840,fcr:1.64,feed:430,startDate:'14/08/2026'},{id:'b3',name:'GVF-B3',shedName:'Nizamabad-Shed-1',placed:9100,age:28,live:9014,mort:86,mortPct:0.9,avgWt:1120,fcr:1.61,feed:285,startDate:'21/08/2026'},{id:'b4',name:'GVF-B4',shedName:'Nizamabad-Shed-2',placed:7980,age:15,live:7965,mort:15,mortPct:0.2,avgWt:420,fcr:1.58,feed:96,startDate:'03/09/2026'}],harvests:[{id:'h1',batch:'GVF-H3',shed:'Nizamabad-Shed-2',date:'22/07/2026',birds:7845,avgWt:2.24,totalKg:17573,rate:122,settlement:2143906},{id:'h2',batch:'GVF-H2',shed:'Kamareddy-Shed-A',date:'05/07/2026',birds:8312,avgWt:2.19,totalKg:18203,rate:118,settlement:2147954},{id:'h3',batch:'GVF-H1',shed:'Kamareddy-Shed-B',date:'18/06/2026',birds:7634,avgWt:2.21,totalKg:16871,rate:115,settlement:1940165}],feedLots:[{id:'l1',lot:'LOT-009',date:'14/09',cost:198400,preS:'0/20',starter:'—',finisher:'0/65',status:'ACTIVE'},{id:'l2',lot:'LOT-008',date:'07/09',cost:512000,preS:'0/25',starter:'8/110',finisher:'0/110',status:'ACTIVE'},{id:'l3',lot:'LOT-007',date:'01/09',cost:489600,preS:'0/60',starter:'0/90',finisher:'0/90',status:'DEPLETED'}],health:[{batch:'GVF-B2',date:'10/09',shed:'Kamareddy-Shed-B',med:'Refit Forte',type:'VITAMINS',cost:1200},{batch:'GVF-B2',date:'10/09',shed:'Kamareddy-Shed-B',med:'Terramycin',type:'ANTIBIOTIC',cost:2800},{batch:'GVF-B1',date:'02/09',shed:'Kamareddy-Shed-A',med:'Immune Boost Plus',type:'VITAMINS',cost:1500},{batch:'GVF-B3',date:'28/08',shed:'Nizamabad-Shed-1',med:'Vimeral Forte',type:'VITAMINS',cost:800}],accounting:[{batch:'GVF-H3',shed:'Nizamabad-Shed-2',status:'HARVESTED',exp:1724000,revenue:2143906,profit:419906},{batch:'GVF-H2',shed:'Kamareddy-Shed-A',status:'HARVESTED',exp:1821000,revenue:2147954,profit:326954},{batch:'GVF-H1',shed:'Kamareddy-Shed-B',status:'HARVESTED',exp:1585000,revenue:1940165,profit:355165},{batch:'GVF-B1',shed:'Kamareddy-Shed-A',status:'GROWING',exp:1184500,revenue:0,profit:-1184500},{batch:'GVF-B2',shed:'Kamareddy-Shed-B',status:'GROWING',exp:842000,revenue:0,profit:-842000}],logs:[{date:'17/09',shed:'Kamareddy-Shed-A',batch:'GVF-B1',logger:'Ravi Kumar',mort:3,starter:'—',finisher:'18 bags',fpb:188.2},{date:'17/09',shed:'Kamareddy-Shed-B',batch:'GVF-B2',logger:'Ravi Kumar',mort:2,starter:'—',finisher:'15 bags',fpb:156.8},{date:'17/09',shed:'Nizamabad-Shed-1',batch:'GVF-B3',logger:'Suresh M.',mort:1,starter:'—',finisher:'12 bags',fpb:106.4}],roles:[{name:'Co-Owner',desc:'1 user(s)'},{name:'Admin',desc:'Full access. 1 user(s)'},{name:'Field Manager',desc:'2 user(s)'},{name:'Logger',desc:'3 user(s)'}],users:[{name:'Prakash Reddy',email:'prakash@greenvalley.in',role:'OWNER'},{name:'Venkat R.',email:'venkat@greenvalley.in',role:'MANAGER'},{name:'Suresh M.',email:'suresh@greenvalley.in',role:'MANAGER'},{name:'Ravi Kumar',email:'ravi@greenvalley.in',role:'LOGGER'}]};

const TAB_INFO:Record<string,{title:string;desc:string}>={OVERVIEW:{title:'Farm Overview',desc:'A live dashboard of every KPI — FCR, mortality, livability, EPEF and total active birds across all sheds in real time.'},SHEDS:{title:'Shed Management',desc:'Register all sheds with capacity, rent, electricity and water. Each shed auto-factors into batch P&L.'},BATCHES:{title:'Bird Batches',desc:'Track every batch from Day 1 — placement, age, live birds, mortality, average weight, FCR and feed consumed.'},FEED:{title:'Feed Lot Tracking',desc:'Every feed procurement logged as a lot — date, types, bags received, cost per bag, transport and labour.'},HARVESTS:{title:'Harvest Records',desc:'Record every harvest with birds collected, average weight, rate per kg, and net settlement.'},HEALTH:{title:'Flock Health Logs',desc:'Log every medication event or vaccination per batch. Total health cost accumulated automatically.'},ACCOUNTING:{title:'Accounting & P&L',desc:'Full batch-wise financial statements — chick cost, feed, health, overheads, revenue, net P&L and ROI.'},LOGS:{title:'Daily Logs',desc:"Field workers log mortality, culls and feed bags in under 2 minutes. Timestamped and photo-verified."},ACCESS:{title:'Access Management',desc:'Create custom roles with granular read/write permissions. Invite managers, loggers and partners.'}};

function PRPOverview({onBatch}:{onBatch:(b:any)=>void}){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem',marginBottom:'0.6rem'}}>Farm Summary</div><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.35rem',marginBottom:'0.4rem'}}><PM icon="🏷️" label="Lifted" value="3" color="#E64A19"/><PM icon="💸" label="Expense" value="Rs51.3L" color={P.red}/><PM icon="💰" label="Revenue" value="Rs62.3L" color={P.success}/><PM icon="📈" label="Net P/L" value="+Rs11.0L" color={P.success}/></div><div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.35rem'}}><PM icon="🌾" label="Feed" value="Rs35.6L" color="#795548"/><PM icon="🐥" label="Chicks" value="Rs11.2L" color="#F57F17"/><PM icon="💊" label="Health" value="Rs34,500" color="#1565C0"/><PM icon="👷" label="Labour" value="Rs2.80L" color="#1565C0"/></div></PCard><PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem',marginBottom:'0.6rem'}}>Production Averages</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="📊" label="FCR" value="1.58" color="#1565C0"/><PM icon="💀" label="Mortality" value="1.20%" color={P.success}/><PM icon="⚖️" label="Avg Wt" value="2.25 kg" color={P.success}/><PM icon="📅" label="Avg Days" value="41.5 d" color="#1565C0"/><PM icon="⚡" label="EPEF" value="300" color={P.success}/><PM icon="✅" label="Livability" value="98.80%" color={P.success}/></div></PCard><PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem',marginBottom:'0.5rem'}}>Active Batches</div><PT headers={['Batch','Shed','Age','Placed','Live','Mort%','Avg Wt','FCR','']} rows={GVF.batches.map(b=>[<span key="n" style={{fontWeight:700}}>{b.name}</span>,b.shedName,`${b.age}d`,b.placed.toLocaleString('en-IN'),b.live.toLocaleString('en-IN'),<span key="m" style={{color:b.mortPct>3?P.red:P.warn,fontWeight:700}}>{b.mortPct}%</span>,`${b.avgWt}g`,<span key="f" style={{color:b.fcr<=1.65?P.success:P.red,fontWeight:700}}>{b.fcr.toFixed(2)}</span>,<PBtn key="v" label="View" small onClick={()=>onBatch(b)}/>])}/></PCard></div>;}
function PRPSheds({onManage}:{onManage:(s:any)=>void}){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Sheds</div><PBtn label="+ New Shed"/></div><PCard style={{padding:0}}><div style={{padding:'0.35rem'}}>{GVF.sheds.map(s=><div key={s.id} style={{background:'rgba(255,255,255,0.7)',padding:'0.55rem 0.75rem',borderRadius:P.rSm,marginBottom:'0.28rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem'}}>{s.name}</div><div style={{fontFamily:P.font,fontSize:'0.65rem',color:P.muted}}>Capacity: {s.capacity.toLocaleString()}</div></div><div style={{display:'flex',gap:'0.3rem',alignItems:'center'}}><PBadge label={`${s.active} Active`} color="red"/><PBtn label="Manage" small onClick={()=>onManage(s)}/></div></div>)}</div></PCard></div>;}
function PRPShedDetail({shed}:{shed:any}){const ab=GVF.batches.find(b=>b.shedName===shed.name);return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>{shed.name}</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="🐔" label="Capacity" value={shed.capacity.toLocaleString()}/><PM icon="⚡" label="Active" value={`${shed.active}`} color={P.red}/><PM icon="💰" label="Monthly OH" value={`Rs${(shed.rent+shed.elec+shed.water).toLocaleString()}`}/></div>{ab&&<PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem'}}>{ab.name} — Age: {ab.age}d · FCR: {ab.fcr}</div></PCard>}</div>;}
function PRPBatches({onManage}:{onManage:(b:any)=>void}){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Bird Batches</div><PBtn label="New Batch"/></div><PCard style={{padding:0}}><PT headers={['Batch','Shed','Started','Age','Placed','Live','Mort%','Avg Wt','FCR','Status','']} rows={GVF.batches.map(b=>[<span key="n" style={{fontWeight:700}}>{b.name}</span>,b.shedName,b.startDate,`${b.age}d`,b.placed.toLocaleString('en-IN'),<span key="l" style={{color:P.success,fontWeight:700}}>{b.live.toLocaleString('en-IN')}</span>,<span key="m" style={{color:b.mortPct>3?P.red:P.warn,fontWeight:700}}>{b.mortPct}%</span>,`${b.avgWt}g`,<span key="f" style={{color:b.fcr<=1.65?P.success:P.red,fontWeight:700}}>{b.fcr.toFixed(2)}</span>,<PBadge key="s" label="GROWING" color="amber"/>,<PBtn key="btn" label="Manage" small onClick={()=>onManage(b)}/>])}/></PCard></div>;}
function PRPBatchDetail({batch}:{batch:any}){const samples=[{day:7,wt:165},{day:14,wt:420},{day:21,wt:830},{day:28,wt:1220},{day:35,wt:1680},{day:42,wt:2180}].filter(s=>s.day<=batch.age);const maxWt=Math.max(...samples.map(s=>s.wt),1);return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>{batch.name}</div><PBadge label="GROWING" color="amber"/></div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="🐥" label="Placed" value={batch.placed.toLocaleString()}/><PM icon="✅" label="Live" value={batch.live.toLocaleString()} color={P.success}/><PM icon="💀" label="Mortality" value={`${batch.mort} (${batch.mortPct}%)`} color={batch.mortPct>3?P.red:P.warn}/><PM icon="⚖️" label="Avg Wt" value={`${batch.avgWt}g`}/><PM icon="📊" label="FCR" value={batch.fcr.toFixed(2)} color={batch.fcr<=1.65?P.success:P.red}/><PM icon="📅" label="Age" value={`${batch.age} days`}/></div>{samples.length>0&&<PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.8rem',marginBottom:'0.55rem'}}>Weight Trend</div><div style={{display:'flex',gap:'0.35rem',alignItems:'flex-end',height:65}}>{samples.map((s,i)=><div key={i} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:2}}><div style={{fontFamily:P.font,fontSize:'0.48rem',color:P.muted}}>{s.wt}g</div><div style={{width:'100%',height:`${Math.max(6,(s.wt/maxWt)*48)}px`,background:`linear-gradient(180deg,${P.success},#1B5E20)`,borderRadius:'3px 3px 0 0'}}/><div style={{fontFamily:P.font,fontSize:'0.48rem',color:P.muted}}>D{s.day}</div></div>)}</div></PCard>}<PCard><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.8rem',marginBottom:'0.45rem'}}>Recent Logs</div><PT headers={['Date','Logger','Mort.','Finisher','Feed/Bird']} rows={GVF.logs.filter(l=>l.batch===batch.name).map(l=>[l.date,l.logger,<span key="m" style={{color:l.mort>5?P.red:P.text,fontWeight:700}}>{l.mort}</span>,l.finisher,`${l.fpb}g`])}/></PCard></div>;}
function PRPFeed(){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Feed Lots</div><PBtn label="New Lot"/></div><PCard style={{padding:0}}><PT headers={['Lot ID','Date','Total Cost','Pre-Starter','Starter','Finisher','Status']} rows={GVF.feedLots.map(l=>[<span key="n" style={{fontWeight:700}}>{l.lot}</span>,l.date,`Rs${l.cost.toLocaleString('en-IN')}`,l.preS,l.starter,l.finisher,<PBadge key="s" label={l.status} color={l.status==='ACTIVE'?'red':'blue'}/>])}/></PCard></div>;}
function PRPHarvests(){const tr=GVF.harvests.reduce((s,h)=>s+h.settlement,0);return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Harvests</div><PBtn label="+ Record Harvest"/></div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="⚖️" label="Total Kg" value={`${GVF.harvests.reduce((s,h)=>s+h.totalKg,0).toLocaleString()} kg`} color={P.success}/><PM icon="💰" label="Revenue" value={`Rs${(tr/100000).toFixed(1)}L`} color={P.success}/><PM icon="📊" label="Avg Rate" value="Rs118.3/kg" color="#1565C0"/></div><PCard style={{padding:0}}><PT headers={['Ref','Shed','Date','Birds','Total Kg','Rate/kg','Settlement']} rows={GVF.harvests.map(h=>[<span key="n" style={{fontWeight:700}}>{h.batch}</span>,h.shed,h.date,h.birds.toLocaleString('en-IN'),`${h.totalKg.toLocaleString()} kg`,`Rs${h.rate}`,`Rs${h.settlement.toLocaleString('en-IN')}`])}/></PCard></div>;}
function PRPHealth(){const total=GVF.health.reduce((s,h)=>s+h.cost,0);return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Flock Health</div><PBtn label="+ Log Event"/></div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="💊" label="Med Events" value={`${GVF.health.length}`} color="#1565C0"/><PM icon="🦠" label="Disease Events" value="0" color={P.success}/><PM icon="💰" label="Health Cost" value={`Rs${total.toLocaleString()}`} color={P.red}/></div><PCard style={{padding:0}}><PT headers={['Batch','Date','Shed','Medicine','Type','Cost']} rows={GVF.health.map(h=>[h.batch,h.date,h.shed,<span key="m" style={{fontWeight:700}}>{h.med}</span>,<PBadge key="t" label={h.type} color={h.type==='ANTIBIOTIC'?'red':h.type==='VITAMINS'?'blue':'amber'}/>,`Rs${h.cost.toLocaleString()}`])}/></PCard></div>;}
function PRPAccounting({onManage}:{onManage:(a:any)=>void}){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Accounting & P&L</div><div style={{fontSize:'0.62rem',color:P.muted}}>Batch financial performance & net margins</div></div><PBtn label="Export" small/></div><PCard style={{padding:0}}><PT headers={['Batch','Shed','Status','Total Expense','Net P/L','']} rows={GVF.accounting.map(a=>[<span key="n" style={{fontWeight:700}}>{a.batch}</span>,a.shed,<PBadge key="s" label={a.status} color={a.status==='HARVESTED'?'green':'amber'}/>,<span key="e" style={{color:P.text,fontWeight:700}}>Rs{a.exp.toLocaleString('en-IN')}</span>,<span key="pl" style={{color:a.profit>0?P.success:P.red,fontWeight:800}}>{a.profit>0?`+Rs${(a.profit/100000).toFixed(2)}L`:`-Rs${(Math.abs(a.profit)/100000).toFixed(2)}L`}</span>,<PBtn key="btn" label="View" small onClick={()=>onManage(a)}/>])}/></PCard></div>;}
function PRPAccountingDetail({a}:{a:any}){const entries=[{cat:'Chick Placement Cost',exp:Math.round(a.exp*0.28)},{cat:'Feed (Pre-Starter, Starter, Finisher)',exp:Math.round(a.exp*0.62)},{cat:'Health & Veterinary Oversight',exp:Math.round(a.exp*0.03)},{cat:'Farm Labour & Overheads',exp:Math.round(a.exp*0.07)}];return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>{a.batch} P&L Statement</div><PBadge label={a.status} color={a.status==='HARVESTED'?'green':'amber'}/></div>{a.revenue>0&&<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0.35rem'}}><PM icon="💰" label="Gross Revenue" value={`Rs${(a.revenue/100000).toFixed(2)}L`} color={P.success}/><PM icon="💸" label="Total Expense" value={`Rs${(a.exp/100000).toFixed(2)}L`} color={P.red}/><PM icon="📈" label="Net Profit" value={`+Rs${(a.profit/100000).toFixed(2)}L`} color={P.success}/></div>}<PCard style={{padding:0}}><PT headers={['Category','Expense']} rows={entries.map(e=>[<span key="c" style={{fontWeight:700}}>{e.cat}</span>,<span key="v" style={{color:P.red,fontWeight:700}}>Rs{e.exp.toLocaleString('en-IN')}</span>])}/></PCard></div>;}
function PRPLogs(){return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Daily Logs</div><PBtn label="+ New Entry"/></div><PCard style={{padding:0}}><PT headers={['Date','Shed','Batch','Logger','Mort.','Starter','Finisher','Feed/Bird']} rows={GVF.logs.map(l=>[l.date,<span key="s" style={{color:P.red,fontWeight:700}}>{l.shed}</span>,l.batch,l.logger,<span key="m" style={{fontWeight:700,color:l.mort>5?P.red:l.mort>0?P.warn:P.success}}>{l.mort}</span>,l.starter,l.finisher,`${l.fpb}g`])}/></PCard></div>;}
function PRPAccess(){const[sub,setSub]=useState('ROLES');return <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}><div style={{fontFamily:P.font,fontSize:'0.95rem',fontWeight:700}}>Access Management</div><div style={{display:'flex',gap:'0.35rem'}}>{['USERS','ROLES','KEYS'].map(k=><button key={k} onClick={()=>setSub(k)} style={{padding:'0.28rem 0.72rem',borderRadius:999,fontFamily:P.font,fontSize:'0.7rem',fontWeight:700,border:`1px solid ${sub===k?P.red:'rgba(0,0,0,0.12)'}`,background:sub===k?P.red:'transparent',color:sub===k?'white':P.muted,cursor:'pointer'}}>{k}</button>)}</div>{sub==='ROLES'&&<PCard>{GVF.roles.map((r,i)=><div key={r.name} style={{padding:'0.45rem 0',borderBottom:i<GVF.roles.length-1?'1px solid rgba(0,0,0,0.06)':'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontFamily:P.font,fontWeight:700,fontSize:'0.82rem'}}>{r.name}</div><div style={{fontFamily:P.font,fontSize:'0.62rem',color:P.muted}}>{r.desc}</div></div><PBtn label="Edit" small outline/></div>)}</PCard>}{sub==='USERS'&&<PCard style={{padding:0}}><PT headers={['User','Email','Role','Status']} rows={GVF.users.map(u=>[u.name,u.email,<PBadge key="r" label={u.role} color={u.role==='OWNER'?'red':u.role==='MANAGER'?'amber':'blue'}/>,<PBadge key="s" label="ACTIVE" color="green"/>])}/></PCard>}{sub==='KEYS'&&<PCard>{GVF.sheds.map((s,i)=><div key={s.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.4rem 0',borderBottom:i<GVF.sheds.length-1?'1px solid rgba(0,0,0,0.06)':'none'}}><span style={{fontFamily:P.font,fontWeight:700,fontSize:'0.78rem'}}>{s.name}</span><PBtn label="Revoke" small outline/></div>)}</PCard>}</div>;}

const PRP_TABS=[{id:'OVERVIEW',label:'Overview'},{id:'SHEDS',label:'Sheds'},{id:'BATCHES',label:'Batches'},{id:'FEED',label:'Feed'},{id:'HARVESTS',label:'Harvests'},{id:'HEALTH',label:'Health'},{id:'ACCOUNTING',label:'Accounting'},{id:'LOGS',label:'Logs'},{id:'ACCESS',label:'Access'}];
function PRPDemoApp({tab,onTab}:{tab:string;onTab:(t:string)=>void}){const[detail,setDetail]=useState<any>(null);const switchTab=(t:string)=>{onTab(t);setDetail(null);};return <div style={{fontFamily:P.font,background:P.grad,display:'flex',flexDirection:'column',height:'100%',minHeight:480}}><div style={{background:'rgba(255,255,255,0.92)',borderBottom:`1px solid ${P.glassBdr}`,padding:'0.45rem 0.85rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}><div><div style={{fontSize:'0.5rem',fontWeight:700,color:P.red,letterSpacing:'0.1em',textTransform:'uppercase'}}>GREEN VALLEY FARMS</div><div style={{fontSize:'0.8rem',fontWeight:700,color:P.text}}>Poultry Resource Planner</div></div><div style={{fontSize:'0.6rem',color:P.muted}}>Logged in</div></div><div style={{display:'flex',gap:'0.18rem',padding:'0.3rem 0.5rem',overflowX:'auto',background:'rgba(255,255,255,0.7)',borderBottom:`1px solid rgba(211,47,47,0.08)`,flexShrink:0}}>{PRP_TABS.map(t=><button key={t.id} onClick={()=>switchTab(t.id)} style={{background:tab===t.id?P.red:'transparent',color:tab===t.id?'white':P.muted,border:tab===t.id?'none':'1px solid rgba(0,0,0,0.08)',borderRadius:P.rSm,padding:'0.18rem 0.45rem',fontWeight:700,fontFamily:P.font,fontSize:'0.58rem',cursor:'pointer',whiteSpace:'nowrap',transition:'all 150ms'}}>{t.label}</button>)}</div><div style={{flex:1,padding:'0.6rem 0.75rem',overflowY:'auto'}}>{detail&&<button onClick={()=>setDetail(null)} style={{background:'rgba(255,255,255,0.7)',border:'1px solid rgba(0,0,0,0.1)',borderRadius:P.rSm,padding:'0.2rem 0.55rem',fontFamily:P.font,fontSize:'0.65rem',fontWeight:600,cursor:'pointer',marginBottom:'0.5rem'}}>Back</button>}{tab==='OVERVIEW'&&<PRPOverview onBatch={b=>{switchTab('BATCHES');setDetail(b);}}/>}{tab==='SHEDS'&&!detail&&<PRPSheds onManage={setDetail}/>}{tab==='SHEDS'&&detail&&<PRPShedDetail shed={detail}/>}{tab==='BATCHES'&&!detail&&<PRPBatches onManage={setDetail}/>}{tab==='BATCHES'&&detail&&<PRPBatchDetail batch={detail}/>}{tab==='FEED'&&<PRPFeed/>}{tab==='HARVESTS'&&<PRPHarvests/>}{tab==='HEALTH'&&<PRPHealth/>}{tab==='ACCOUNTING'&&!detail&&<PRPAccounting onManage={setDetail}/>}{tab==='ACCOUNTING'&&detail&&<PRPAccountingDetail a={detail}/>}{tab==='LOGS'&&<PRPLogs/>}{tab==='ACCESS'&&<PRPAccess/>}</div></div>;}

function useScrollReveal(){
  useEffect(()=>{
    const els = document.querySelectorAll('.rv, .rv-left, .rv-right');
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    },{ threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  },[]);
}

type BV = 'solid' | 'outline' | 'ghost';

function MinBtn({label,icon,onClick,variant='solid'}:{label:string;icon?:React.ReactNode;onClick?:()=>void;variant?:BV}){const vs:{[k:string]:React.CSSProperties}={solid:{background:C.amber,color:'#fff',border:'none',boxShadow:'0 2px 12px rgba(200,118,26,0.28)'},outline:{background:'transparent',color:C.dark,border:`1.5px solid ${C.dark}`,boxShadow:'none'},ghost:{background:'transparent',color:C.amber,border:`1.5px solid ${C.amber}`,boxShadow:'none'}};return <button onClick={onClick} style={{display:'inline-flex',alignItems:'center',gap:6,fontFamily:'"Inter",sans-serif',fontWeight:600,fontSize:'0.85rem',cursor:'pointer',borderRadius:4,padding:'0.6rem 1.4rem',transition:'all 180ms',...vs[variant]}}>{label}{icon}</button>;}

function Navbar({onContact}:{onContact:()=>void}){const[sc,setSc]=useState(false);useEffect(()=>{const h=()=>setSc(window.scrollY>50);window.addEventListener('scroll',h,{passive:true});return()=>window.removeEventListener('scroll',h);},[]);const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});return <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:1000,padding:'0.85rem 0',background:sc?'rgba(247,241,227,0.96)':'transparent',backdropFilter:sc?'blur(12px)':'none',boxShadow:sc?`0 1px 0 ${C.border}`:'none',transition:'all 280ms'}}><div className="nav-inner" style={{maxWidth:1160,margin:'0 auto',padding:'0 2rem',display:'flex',alignItems:'center',justifyContent:'space-between'}}><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',border:'none',background:'none',padding:0}}><svg width="26" height="26" viewBox="0 0 40 40" fill="none"><ellipse cx="18" cy="26" rx="10" ry="8" fill={C.amber} opacity="0.9"/><circle cx="26" cy="14" r="6" fill={C.amber}/><circle cx="28" cy="12" r="1.5" fill={C.dark}/><path d="M32 14 L36 13 L33 16" fill={C.amberL}/><path d="M15 34 L13 38 M21 34 L23 38" stroke={C.amber} strokeWidth="2" strokeLinecap="round"/></svg><div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'clamp(0.95rem, 3vw, 1.05rem)',color:C.dark}}>Coop Works<span style={{color:C.amber}}> Consulting</span></div></button><div className="nav-desktop-links" style={{display:'flex',alignItems:'center',gap:'2rem'}}>{[['Services','services'],['Integration','integration'],['Turnkey','turnkey'],['Platform','software'],['About','about']].map(([l,id])=><button key={id} onClick={()=>go(id)} style={{fontFamily:'"Inter",sans-serif',fontSize:'0.87rem',fontWeight:500,color:C.mid,background:'none',border:'none',cursor:'pointer'}}>{l}</button>)}</div><MinBtn label="Contact Us" onClick={onContact}/></div></nav>;}

function Hero(){
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: "url('/hero-single-chick.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5rem',
      overflow: 'hidden'
    }}>
      {/* Soft gradient overlay to ensure crisp text readability on desktop and mobile */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(247,241,227,0.92) 0%, rgba(247,241,227,0.7) 50%, rgba(247,241,227,0.2) 85%)',
        pointerEvents: 'none',
        zIndex: 1
      }}/>
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1160,
        margin: '0 auto',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2rem)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div style={{ maxWidth: 560 }}>
          <h1 className="rv" style={{
            fontFamily: '"Playfair Display",serif',
            fontSize: 'clamp(2.3rem, 6.2vw, 4.8rem)',
            fontWeight: 900,
            color: C.dark,
            lineHeight: 1.08,
            marginBottom: '0.85rem',
            letterSpacing: '-0.025em'
          }}>
            Coop Works <span style={{ color: C.amber }}>Consulting</span>
          </h1>

          <div className="rv rv-d1" style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: C.dark,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            Data driven Poultry consulting
          </div>
          
          <p className="rv rv-d2" style={{
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '1.08rem',
            color: C.mid,
            lineHeight: 1.85,
            maxWidth: 460,
            marginBottom: '2.5rem'
          }}>
            We grow broilers, build turnkey farms, and run every decision through our own software application — built for real Indian broiler operations.
          </p>
          
          <div className="rv rv-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <MinBtn
              label="View Services"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              icon={<ArrowRight size={15}/>}
            />
            <MinBtn
              label="About Us"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IconIntegration(){
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Hand-drawn organic hen outline like reference */}
      <path d="M14 36 C10 33, 8 26, 12 18 C14 14, 18 10, 22 10 C26 10, 28 13, 30 15 C34 14, 38 16, 38 20 C42 22, 44 26, 42 30 C40 35, 34 38, 28 38 C20 38, 16 38, 14 36 Z" />
      {/* Hen Comb & Beak */}
      <path d="M22 10 C22 6, 26 6, 25 10 C28 8, 30 11, 29 13" />
      <path d="M30 15 L36 16 L31 19" />
      {/* Hen Eye & Wattle */}
      <circle cx="26" cy="14" r="1.2" fill={C.amber} stroke="none" />
      <path d="M29 18 C30 21, 28 23, 27 21" />
      {/* Hand-drawn wing detail feathers */}
      <path d="M19 25 C23 23, 28 25, 27 31 C25 34, 21 34, 19 30" />
      <path d="M23 27 C26 26, 29 28, 28 32" />
    </svg>
  );
}

function IconTurnkey(){
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Hand-drawn barn farm field like reference */}
      <path d="M8 40 L8 24 L24 12 L40 24 L40 40 Z" />
      <path d="M5 25 L24 10 L43 25" />
      <path d="M19 40 L19 28 C19 25, 29 25, 29 28 L29 40" />
      <line x1="24" y1="18" x2="24" y2="22" />
      <line x1="22" y1="20" x2="26" y2="20" />
      {/* Rising Sun and rays like reference */}
      <path d="M31 12 C33 9, 38 9, 40 12" />
      <line x1="36" y1="6" x2="36" y2="8" />
      <line x1="41" y1="8" x2="40" y2="10" />
    </svg>
  );
}

function IconSoftware(){
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Hand-drawn egg pair like reference */}
      <ellipse cx="20" cy="26" rx="11" ry="14" transform="rotate(-15 20 26)" />
      <ellipse cx="32" cy="28" rx="9" ry="12" transform="rotate(20 32 28)" />
      {/* Subtle shine / organic sketch line */}
      <path d="M14 20 C15 16, 18 14, 21 14" />
    </svg>
  );
}

function IconAdvisory(){
  return (
    <svg width="46" height="46" viewBox="0 0 48 48" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Hand-drawn farm landscape fields with trees like reference */}
      <path d="M6 38 C14 34, 22 36, 30 32 C36 29, 40 31, 44 34" />
      <path d="M8 42 C16 38, 26 40, 42 38" />
      {/* Plants / Trees sprouting */}
      <line x1="14" y1="35" x2="14" y2="20" />
      <circle cx="14" cy="18" r="3.5" />
      <line x1="22" y1="35" x2="22" y2="15" />
      <circle cx="22" cy="13" r="4" />
      {/* Sun rising above field */}
      <path d="M30 28 C30 22, 36 22, 38 25" />
      <line x1="34" y1="19" x2="34" y2="16" />
      <line x1="39" y1="20" x2="41" y2="18" />
    </svg>
  );
}

const SVC=[{Icon:IconIntegration,title:'Broiler Integration',line:'Contract farming with large integrators to enable high volume production',id:'integration'},{Icon:IconTurnkey,title:'Turnkey Broiler Operations',line:'Tailored for individuals looking for a secondary source of income',id:'turnkey'},{Icon:IconSoftware,title:'Software Solution',line:'In-house ERP built for real Indian broiler farm operations.',id:'software'},{Icon:IconAdvisory,title:'Poultry Advisory',line:'FCR improvement, biosecurity audits, human resource training, and farm feasibility.',id:'about'}];

function ServicesSection(){
  return (
    <section id="services" style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
      <div className="services-outer-grid" style={{
        maxWidth: 1160,
        margin: '0 auto',
        padding: 'clamp(4rem, 7vw, 6rem) clamp(1.25rem, 4vw, 2rem) 3rem',
      }}>
        <div>
          <div className="rv" style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: C.amber,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '0.85rem'
          }}>
            What We Do
          </div>
          <h2 className="rv rv-d1" style={{
            fontFamily: '"Playfair Display",serif',
            fontSize: 'clamp(2.1rem, 3.4vw, 2.85rem)',
            fontWeight: 900,
            color: C.dark,
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Data-Driven Operations.<br/>
            Ethical Partnerships.
          </h2>
          <p className="rv rv-d2" style={{
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '0.98rem',
            color: C.mid,
            lineHeight: 1.82,
            maxWidth: 320,
            marginBottom: '2rem'
          }}>
            Four core verticals, one unified mission — end-to-end transparency, telemetry-backed precision, and verified farm profitability across Indian poultry.
          </p>
        </div>
        
        <div className="services-cards-grid">
          {SVC.map(({ Icon, title, line, id }, idx) => (
            <div key={id} className={`rv rv-d${Math.min(idx + 1, 4)}`} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <Icon/>
              </div>
              <div>
                <div style={{
                  fontFamily: '"Playfair Display",serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: C.dark,
                  marginBottom: '0.4rem',
                  lineHeight: 1.25
                }}>
                  {title}
                </div>
                <div style={{
                  fontFamily: '"DM Sans",sans-serif',
                  fontSize: '0.88rem',
                  color: C.mid,
                  lineHeight: 1.72,
                  marginBottom: '0.65rem'
                }}>
                  {line}
                </div>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    fontFamily: '"Inter",sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: C.amber,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Know more <ChevronRight size={14}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationSection({onContact}:{onContact?:()=>void}){
  return (
    <section id="integration" className="integration-section" style={{
      position: 'relative',
      minHeight: '88vh',
      backgroundColor: '#FFFFFF',
      backgroundImage: "url('/integration-white-chickens.jpg')",
      backgroundSize: '960px auto',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      padding: '3rem 0 6.5rem',
      overflow: 'hidden'
    }}>
      <div className="integration-grid" style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1300,
        margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
        width: '100%',
      }}>
        {/* Left Column: Tagline and Title */}
        <div>
          <div className="rv" style={{
            fontFamily: '"Inter",sans-serif',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: C.amber,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            Broiler Integration
          </div>
          <h2 className="rv rv-d1" style={{
            fontFamily: '"Playfair Display",serif',
            fontSize: 'clamp(2.1rem, 3.4vw, 2.85rem)',
            fontWeight: 900,
            color: C.dark,
            lineHeight: 1.14,
            letterSpacing: '-0.02em'
          }}>
            Your Birds.<br/>
            <span style={{ color: C.amber }}>Our Team.</span><br/>
            One Goal.
          </h2>
        </div>

        {/* Center: Open gap for chickens */}
        <div className="integration-center-spacer" style={{ minHeight: 440, pointerEvents: 'none' }} />

        {/* Right Column: User copy & Get in Touch CTA */}
        <div>
          <p className="rv rv-d1" style={{
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '1.05rem',
            color: C.mid,
            lineHeight: 1.85,
            marginBottom: '1.5rem'
          }}>
            Coop Works is a registered contract grower for major broiler integrators. We bring the farm — sheds, verified biosecurity, experienced labor, and live daily telemetry.
          </p>
          <p className="rv rv-d2" style={{
            fontFamily: '"DM Sans",sans-serif',
            fontSize: '1.02rem',
            color: C.mid,
            lineHeight: 1.85,
            marginBottom: '2.25rem'
          }}>
            Every single batch is tracked daily in our software application - Poultry Resource Planner. Mortality, feed consumption, FCR, and sample weights are all regularly logged with full shared transparency.
          </p>
          <div className="rv rv-d3">
            <MinBtn
              label="Get in Touch"
              onClick={onContact || (() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }))}
              icon={<ArrowRight size={15}/>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ROIModal({onClose}:{onClose:()=>void}){const[birds,setBirds]=useState(15000);const[chickCost,setChickCost]=useState(45);const[feedCost,setFeedCost]=useState(2200);const[growCharge,setGrowCharge]=useState(6);const[salePrice,setSalePrice]=useState(125);const[fcr,setFcr]=useState(1.65);const[mortPct,setMortPct]=useState(3);const live=Math.round(birds*(1-mortPct/100));const totalKg=live*2.2;const feedBags=(totalKg*fcr)/50;const prod=birds*chickCost+feedBags*feedCost+totalKg*growCharge;const rev=totalKg*salePrice;const netPL=rev-prod;const roi=prod>0?(netPL/prod)*100:0;const fmt=(n:number)=>{const a=Math.abs(n);const s=n<0?'-Rs':'Rs';return a>=100000?`${s}${(a/100000).toFixed(2)}L`:`${s}${(a/1000).toFixed(1)}K`;};const sliders=[{label:'Chicks',val:birds,set:setBirds,min:0,max:50000,step:500,disp:birds.toLocaleString('en-IN')},{label:'Chick Cost (Rs/bird)',val:chickCost,set:setChickCost,min:0,max:100,step:1,disp:`Rs${chickCost}`},{label:'Feed Cost (Rs/50kg bag)',val:feedCost,set:setFeedCost,min:1000,max:10000,step:50,disp:`Rs${feedCost.toLocaleString()}`},{label:'Growing Charge (Rs/kg)',val:growCharge,set:setGrowCharge,min:0,max:20,step:0.5,disp:`Rs${growCharge}/kg`},{label:'Sale Price (Rs/kg)',val:salePrice,set:setSalePrice,min:0,max:500,step:5,disp:`Rs${salePrice}/kg`},{label:'FCR',val:fcr,set:setFcr,min:1.0,max:2.5,step:0.05,disp:fcr.toFixed(2)},{label:'Mortality',val:mortPct,set:setMortPct,min:0,max:10,step:1,disp:`${mortPct}%`}];return <div style={{position:'fixed',inset:0,zIndex:3000,background:'rgba(28,24,19,0.55)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem'}} onClick={onClose}><div style={{background:C.white,borderRadius:8,width:'100%',maxWidth:760,maxHeight:'90vh',overflowY:'auto',boxShadow:'0 24px 64px rgba(0,0,0,0.18)'}} onClick={e=>e.stopPropagation()}><div style={{padding:'1.25rem 1.75rem',borderBottom:`1px solid ${C.border}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><h3 style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1.3rem',color:C.dark}}>Batch ROI Calculator</h3><p style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.8rem',color:C.light,marginTop:2}}>Avg live weight 2.2 kg at harvest</p></div><button onClick={onClose} style={{width:32,height:32,borderRadius:'50%',background:C.bg,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><X size={14} color={C.mid}/></button></div><div className="roi-modal-grid"><div className="roi-modal-sliders" style={{padding:'1.5rem',borderRight:`1px solid ${C.border}`,display:'flex',flexDirection:'column',gap:'1rem'}}>{sliders.map(s=><div key={s.label}><div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}><label style={{fontFamily:'"Inter",sans-serif',fontSize:'0.77rem',fontWeight:600,color:C.mid}}>{s.label}</label><div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.85rem',fontWeight:700,color:C.dark}}>{s.disp}</div></div><input type="range" min={s.min} max={s.max} step={s.step} value={s.val} onChange={e=>s.set(Number(e.target.value))} style={{width:'100%',accentColor:C.amber}}/></div>)}</div><div style={{padding:'1.5rem',background:C.bg}}><div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1rem',color:C.dark,marginBottom:'1.25rem'}}>Results</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem',marginBottom:'1.5rem'}}>{[{l:'Production Cost',v:fmt(prod),pos:false},{l:'Revenue',v:fmt(rev),pos:true},{l:'Net P/L',v:fmt(netPL),pos:netPL>=0},{l:'ROI',v:`${roi.toFixed(1)}%`,pos:roi>=0}].map(({l,v,pos})=><div key={l} style={{background:C.white,borderRadius:4,padding:'1rem',border:`1px solid ${C.border}`}}><div style={{fontFamily:'"Playfair Display",serif',fontSize:'1.4rem',fontWeight:900,color:pos?'#2E7D32':'#B83230',lineHeight:1}}>{v}</div><div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.62rem',fontWeight:600,color:C.light,marginTop:4,textTransform:'uppercase',letterSpacing:'0.05em'}}>{l}</div></div>)}</div>{[{l:'Live birds',v:`${live.toLocaleString()} birds`},{l:'Total kg',v:`${Math.round(totalKg).toLocaleString()} kg`},{l:'Feed bags',v:`${Math.round(feedBags)} bags`},{l:'Cost/kg',v:`Rs${prod>0?(prod/totalKg).toFixed(2):0}/kg`}].map(({l,v})=><div key={l} style={{display:'flex',justifyContent:'space-between',padding:'0.4rem 0',borderBottom:`1px solid ${C.border}`}}><span style={{fontFamily:'"Inter",sans-serif',fontSize:'0.78rem',color:C.mid}}>{l}</span><span style={{fontFamily:'"Inter",sans-serif',fontSize:'0.85rem',fontWeight:700,color:C.dark}}>{v}</span></div>)}</div></div></div></div>;}

function IndustryJourneyModal({onClose}:{onClose:()=>void}){const steps=[{n:'01',t:'You Bring the Capital',d:'Investor meets Coop Works. We assess farm requirements, location, flock size and structure the deal before anything moves.'},{n:'02',t:'We Source the Sheds',d:'Coop Works identifies and evaluates shed locations — size, construction, road access, water supply, proximity to integrator routes.'},{n:'03',t:'Lease Contracts with Shed Owners',d:'We negotiate and sign lease agreements on your behalf — fixed rent, maintenance terms, renovation rights. Clean contracts, no verbal deals.'},{n:'04',t:'Shed Preparation',d:'Complete cleanout, litter application, equipment calibration, heater testing. Shed certified biosecure before the first chick arrives.'},{n:'05',t:'Chick Placement',d:'Day-old chicks arrive and are counted tray by tray. Placement entered in PRP — the 45-day clock starts.'},{n:'06',t:'Brooding Phase (Days 1-14)',d:'High heat, starter feed, nipple drinker checks every few hours. Mortality and Feed consumption logged everyday. Critical first two weeks.'},{n:'07',t:'Growth & Finishing (Days 15-45)',d:'Grower then finisher ration. Weekly live weight samples tracked against breed standards. FCR calculated in real time.'},{n:'08',t:'Harvest',d:"Catching crew loads birds. Weighed live at the integrator's plant. Every kg recorded against PRP batch data."},{n:'09',t:'Settlement',d:'The buyer pays the growing charge per kg. Coop Works deducts its management fee. Full P&L shared within 24 hours of harvest.'}];return <div style={{position:'fixed',inset:0,zIndex:3000,background:'rgba(28,24,19,0.55)',backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'1.5rem'}} onClick={onClose}><div style={{background:C.white,borderRadius:8,width:'100%',maxWidth:640,maxHeight:'88vh',overflowY:'auto',boxShadow:'0 24px 64px rgba(0,0,0,0.18)'}} onClick={e=>e.stopPropagation()}><div style={{padding:'1.5rem 2rem',borderBottom:`1px solid ${C.border}`,display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,background:C.white,zIndex:1}}><h3 style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1.3rem',color:C.dark}}>How the Broiler Industry Works</h3><button onClick={onClose} style={{width:32,height:32,borderRadius:'50%',background:C.bg,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><X size={14} color={C.mid}/></button></div><div style={{padding:'2rem'}}>{steps.map((s,i)=><div key={s.n} style={{display:'flex',gap:'1.5rem',paddingBottom:i<steps.length-1?'1.75rem':'0',marginBottom:i<steps.length-1?'1.75rem':'0',borderBottom:i<steps.length-1?`1px solid ${C.border}`:'none'}}><div style={{flexShrink:0,width:38,height:38,borderRadius:'50%',background:C.bg,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'"Playfair Display",serif',fontWeight:900,fontSize:'0.75rem',color:C.amber}}>{s.n}</div><div><div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'0.97rem',color:C.dark,marginBottom:'0.3rem'}}>{s.t}</div><div style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.87rem',color:C.mid,lineHeight:1.75}}>{s.d}</div></div></div>)}</div></div></div>;}

function TurnkeySection(){
  const [showROI, setShowROI] = useState(false);
  const [showJourney, setShowJourney] = useState(false);

  return (
    <>
      {showROI && <ROIModal onClose={() => setShowROI(false)} />}
      {showJourney && <IndustryJourneyModal onClose={() => setShowJourney(false)} />}

      <section
        id="turnkey"
        className="turnkey-section"
        style={{
          position: 'relative',
          minHeight: '88vh',
          backgroundColor: '#FFFFFF',
          backgroundImage: "url('/turnkey-couple-ipad-white.jpg')",
          backgroundSize: '1000px auto',
          backgroundPosition: '2.5cm center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          padding: '6.5rem 0',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <div
          className="turnkey-grid"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(1.25rem, 4vw, 2rem)',
            width: '100%',
          }}
        >
          {/* Left Column: Buffer for the complete couple */}
          <div className="turnkey-spacer" style={{ minHeight: 480, pointerEvents: 'none' }} />

          {/* Right Column: Section text block with Apple fade-in-up */}
          <div style={{ maxWidth: 540 }}>
            <div
              className="rv"
              style={{
                fontFamily: '"Inter",sans-serif',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: C.amber,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              Turnkey Broiler Operation
            </div>
            
            <h2
              className="rv rv-d1"
              style={{
                fontFamily: '"Playfair Display",serif',
                fontSize: 'clamp(2.1rem, 3.4vw, 2.85rem)',
                fontWeight: 900,
                color: C.dark,
                lineHeight: 1.16,
                marginBottom: '1.4rem',
                letterSpacing: '-0.02em'
              }}
            >
              <span style={{ display: 'block' }}>Build Alternate Wealth.</span>
              <span style={{ color: C.amber, display: 'block' }}>From Your Home.</span>
            </h2>
            
            <p
              className="rv rv-d2"
              style={{
                fontFamily: '"DM Sans",sans-serif',
                fontSize: '1.05rem',
                color: C.mid,
                lineHeight: 1.85,
                marginBottom: '1.25rem'
              }}
            >
              Looking to generate a reliable secondary source of income without leaving your day job or home? You provide the investment capital, and we handle 100% of the ground operations — shed lease contracts, equipment fit-outs, day-old chick placement, expert veterinary oversight, and guaranteed harvest settlement.
            </p>
            
            <p
              className="rv rv-d3"
              style={{
                fontFamily: '"DM Sans",sans-serif',
                fontSize: '1.02rem',
                color: C.mid,
                lineHeight: 1.85,
                marginBottom: '2.5rem'
              }}
            >
              Track live CCTV camera feeds, daily mortality, and batch P&L directly from your iPad or phone with complete peace of mind. Our management earnings are strictly tied to your flock&apos;s net profitability.
            </p>
            
            <div className="rv rv-d4" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <MinBtn
                label="Calculate Batch ROI"
                onClick={() => setShowROI(true)}
                icon={<Calculator size={15}/>}
              />
              <MinBtn
                label="See How It Works"
                onClick={() => setShowJourney(true)}
                variant="outline"
                icon={<ChevronRight size={15}/>}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SoftwareSection({onContact}:{onContact:()=>void}){
  const[prpTab,setPrpTab]=useState('OVERVIEW');
  const[interacted,setInteracted]=useState(false);
  const containerRef=useRef<HTMLDivElement>(null);
  const ipadRef=useRef<HTMLDivElement>(null);
  const rightRef=useRef<HTMLDivElement>(null);
  const progRef=useRef(0);
  const targetRef=useRef(0);
  const rafRef=useRef<number>(0);

  useEffect(()=>{
    const onScroll=()=>{
      const el=containerRef.current;
      if(!el)return;
      if(window.innerWidth<=1024)return;
      const{top}=el.getBoundingClientRect();
      targetRef.current=Math.min(1,Math.max(0,(window.innerHeight-top)/(window.innerHeight*0.85)));
    };
    const animate=()=>{
      if(window.innerWidth>1024){
        progRef.current+=(targetRef.current-progRef.current)*0.07;
        const p=progRef.current;
        if(ipadRef.current){
          const rotX=20*Math.max(0,1-p*2);
          const sc=0.68+0.32*Math.min(1,p*1.7);
          const tx=-(Math.max(0,(p-0.58)/0.38)*20);
          ipadRef.current.style.transform=`perspective(1400px) rotateX(${rotX}deg) scale(${sc}) translateX(${tx}%)`;
          ipadRef.current.style.opacity=String(Math.min(1,0.3+p*1.5));
        }
        if(rightRef.current){
          const rp=Math.min(1,Math.max(0,(p-0.62)/0.33));
          rightRef.current.style.opacity=String(rp);
          rightRef.current.style.transform=`translateX(${(1-rp)*32}px)`;
          rightRef.current.style.pointerEvents=rp>0.5?'auto':'none';
        }
      } else {
        if(ipadRef.current){
          ipadRef.current.style.transform='none';
          ipadRef.current.style.opacity='1';
        }
        if(rightRef.current){
          rightRef.current.style.opacity='1';
          rightRef.current.style.transform='none';
          rightRef.current.style.pointerEvents='auto';
        }
      }
      rafRef.current=requestAnimationFrame(animate);
    };
    window.addEventListener('scroll',onScroll,{passive:true});
    onScroll();
    rafRef.current=requestAnimationFrame(animate);
    return()=>{
      window.removeEventListener('scroll',onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  },[]);

  const info=TAB_INFO[prpTab]||TAB_INFO['OVERVIEW'];

  return (
    <section id="software" style={{background:C.white,borderTop:`1px solid ${C.border}`}}>
      <div style={{maxWidth:1160,margin:'0 auto',padding:'clamp(4rem, 7vw, 7rem) clamp(1.25rem, 4vw, 2rem) 0',textAlign:'center'}}>
        <div className="rv" style={{fontFamily:'"Inter",sans-serif',fontSize:'0.72rem',fontWeight:700,color:C.amber,letterSpacing:'0.16em',textTransform:'uppercase',marginBottom:'0.65rem'}}>Software Platform</div>
        <h2 className="rv" style={{fontFamily:'"Playfair Display",serif',fontSize:'clamp(2.1rem, 3.4vw, 2.85rem)',fontWeight:900,color:C.dark,lineHeight:1.1,marginBottom:'0.85rem'}}>Poultry Resource Planner</h2>
        <p className="rv" style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.97rem',color:C.mid,maxWidth:420,margin:'0 auto 1rem',lineHeight:1.8}}>Our own ERP, built for Indian broiler operations — not adapted from a generic farming template.</p>
      </div>

      <div ref={containerRef} className="software-scroll-container" style={{height:'210vh',position:'relative'}}>
        <div className="software-sticky-wrapper" style={{position:'sticky',top:0,height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'visible',padding:'0 2rem'}}>
          <div ref={ipadRef} className="software-ipad-container" style={{width:'100%',maxWidth:820,opacity:0,willChange:'transform,opacity',transformOrigin:'center center',flexShrink:0}}>
            <div className="software-ipad-frame" style={{
              position: 'relative',
              background: '#18181B',
              borderRadius: '34px',
              padding: '16px 20px',
              boxShadow: '0 30px 80px -15px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15) inset, 0 0 0 3px #3F3F46',
              border: '2px solid #52525B',
              maxWidth: 820,
              margin: '0 auto'
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#27272A',
                border: '1px solid #3F3F46',
                margin: '0 auto 10px auto'
              }}/>
              <div className="software-screen" style={{
                background: '#FFF',
                borderRadius: '20px',
                overflow: 'hidden',
                height: 540,
                boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                position: 'relative',
                cursor: 'pointer'
              }} onClick={()=>setInteracted(true)}>
                <PRPDemoApp tab={prpTab} onTab={t=>{setPrpTab(t);setInteracted(true);}}/>
                {!interacted&&<div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.15)',backdropFilter:'blur(2px)',zIndex:10,cursor:'pointer'}} onClick={()=>setInteracted(true)}><div style={{background:'rgba(255,255,255,0.92)',borderRadius:4,padding:'0.6rem 1.25rem',fontFamily:'"Inter",sans-serif',fontSize:'0.8rem',fontWeight:700,color:C.dark}}>Click to Interact</div></div>}
              </div>
            </div>
          </div>
          <div ref={rightRef} className="software-sidebar" style={{position:'absolute',right:'3rem',width:'26%',maxWidth:280,opacity:0,transform:'translateX(32px)',willChange:'transform,opacity'}}>
            <div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.62rem',fontWeight:700,color:C.amber,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'0.5rem'}}>Now viewing</div>
            <h3 style={{fontFamily:'"Playfair Display",serif',fontSize:'1.4rem',fontWeight:900,color:C.dark,marginBottom:'0.65rem',lineHeight:1.2}}>{info.title}</h3>
            <p style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.9rem',color:C.mid,lineHeight:1.82}}>{info.desc}</p>
          </div>
        </div>
      </div>

      <div style={{maxWidth:1160,margin:'0 auto',padding:'2rem clamp(1.25rem, 4vw, 2rem) clamp(4rem, 6vw, 7rem)',textAlign:'center',display:'flex',justifyContent:'center',gap:10,flexWrap:'wrap'}}>
        <a href="https://poultryresourceplanner.com" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:6,padding:'0.65rem 1.5rem',borderRadius:4,background:C.amber,color:'#fff',fontFamily:'"Inter",sans-serif',fontWeight:600,fontSize:'0.87rem',textDecoration:'none'}}>Open Platform <ExternalLink size={13}/></a>
        <button onClick={onContact} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'0.65rem 1.4rem',borderRadius:4,background:'transparent',color:C.dark,fontFamily:'"Inter",sans-serif',fontWeight:600,fontSize:'0.87rem',border:`1.5px solid ${C.dark}`,cursor:'pointer'}}>Request Demo</button>
      </div>
    </section>
  );
}

function AboutSection(){
  return (
    <section id="about" style={{background:C.white,borderTop:`1px solid ${C.border}`}}>
      <div className="about-grid about-container" style={{maxWidth:1160,margin:'0 auto',padding:'clamp(4rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2rem)',alignItems:'start'}}>
        <div className="rv-left">
          <div className="rv" style={{fontFamily:'"Inter",sans-serif',fontSize:'0.72rem',fontWeight:700,color:C.amber,letterSpacing:'0.16em',textTransform:'uppercase',marginBottom:'0.85rem'}}>Our Philosophy</div>
          <h2 style={{fontFamily:'"Playfair Display",serif',fontSize:'clamp(2.1rem, 3.4vw, 2.85rem)',fontWeight:900,color:C.dark,lineHeight:1.12,marginBottom:'1.25rem'}}>Built on Data,<br/>Transparency<br/>&amp; Trust.</h2>
          <p style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.97rem',color:C.mid,lineHeight:1.85,marginBottom:'2.5rem'}}>Poultry farming is about consistent execution and honest numbers. Every decision we make is backed by real field data, shared openly with everyone involved.</p>
          <MinBtn label="Get in Touch" onClick={()=>document.getElementById('footer')?.scrollIntoView({behavior:'smooth'})} icon={<ArrowRight size={14}/>}/>
        </div>
        <div className="rv-right" style={{display:'flex',flexDirection:'column',gap:'2.5rem'}}>
          {[{t:'Data before decisions',d:'We log before we act. FCR, mortality, weight — every number goes into PRP before any management call is made.'},{t:'Same numbers, both sides',d:'Our clients see the exact same P&L we do. No curated reports, no selective sharing — ever.'},{t:'Measurable targets only',d:'Every batch starts with a specific FCR and livability target. We close with a verified result, not a narrative.'},{t:'Partnership model',d:'We succeed when you succeed. Our income is tied to batch performance, not a flat management fee.'}].map((p,i)=><div key={p.t} style={{display:'flex',gap:'1.25rem',alignItems:'flex-start'}}><div style={{width:34,height:34,borderRadius:'50%',background:C.bg,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'"Playfair Display",serif',fontWeight:900,fontSize:'0.75rem',color:C.amber,flexShrink:0}}>{String(i+1).padStart(2,'0')}</div><div><div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1rem',color:C.dark,marginBottom:'0.3rem'}}>{p.t}</div><div style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.87rem',color:C.mid,lineHeight:1.75}}>{p.d}</div></div></div>)}
        </div>
      </div>
    </section>
  );
}

function ContactModal({onClose}:{onClose:()=>void}){const[form,setForm]=useState({name:'',email:'',phone:'',service:'',message:''});const[submitted,setSubmitted]=useState(false);const[loading,setLoading]=useState(false);const IS:React.CSSProperties={padding:'0.6rem 0.85rem',border:`1px solid ${C.border}`,borderRadius:4,fontFamily:'"DM Sans",sans-serif',fontSize:'0.9rem',color:C.dark,outline:'none',width:'100%',background:C.white};const upd=(k:string,v:string)=>setForm(f=>({...f,[k]:v}));const handleSubmit=async(e:React.FormEvent)=>{e.preventDefault();setLoading(true);try{await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});}catch(err){console.error(err);}finally{setLoading(false);setSubmitted(true);}};return <div style={{position:'fixed',inset:0,zIndex:2000,background:'rgba(28,24,19,0.55)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem'}} onClick={onClose}><div style={{background:C.white,borderRadius:8,width:'100%',maxWidth:480,maxHeight:'90vh',overflowY:'auto',boxShadow:'0 24px 64px rgba(0,0,0,0.2)'}} onClick={e=>e.stopPropagation()}><div style={{padding:'1.25rem 1.5rem',borderBottom:`1px solid ${C.border}`,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><h3 style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1.2rem',color:C.dark}}>Schedule a Consultation</h3><p style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.82rem',color:C.mid,marginTop:4}}>We&apos;ll get back to you within 24 hours.</p></div><button onClick={onClose} style={{width:30,height:30,borderRadius:'50%',background:C.bg,border:`1px solid ${C.border}`,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}><X size={13} color={C.mid}/></button></div><div style={{padding:'1.5rem'}}>{submitted?<div style={{textAlign:'center',padding:'3rem 0'}}><div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1.2rem',color:C.dark,marginBottom:8}}>Thank You!</div><p style={{fontFamily:'"DM Sans",sans-serif',color:C.mid,fontSize:'0.9rem'}}>We&apos;ve received your enquiry and will be in touch shortly.</p></div>:<form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>{[['name','Full Name','Your name','text',true],['email','Email','you@example.com','email',true],['phone','Phone Number','+91 90194 52501','tel',true]].map(([k,l,ph,t,req])=><div key={k as string} style={{display:'flex',flexDirection:'column',gap:5}}><label style={{fontFamily:'"Inter",sans-serif',fontSize:'0.77rem',fontWeight:600,color:C.mid}}>{l} {req&&'*'}</label><input required={req as boolean} type={t as string} placeholder={ph as string} value={(form as any)[k as string]} onChange={e=>upd(k as string,e.target.value)} style={IS}/></div>)}<div style={{display:'flex',flexDirection:'column',gap:5}}><label style={{fontFamily:'"Inter",sans-serif',fontSize:'0.77rem',fontWeight:600,color:C.mid}}>Service</label><select value={form.service} onChange={e=>upd('service',e.target.value)} style={{...IS}}><option value="">Select...</option>{['Broiler Integration','Turnkey Operations','PRP Demo','Advisory','General Enquiry'].map(o=><option key={o}>{o}</option>)}</select></div><div style={{display:'flex',flexDirection:'column',gap:5}}><label style={{fontFamily:'"Inter",sans-serif',fontSize:'0.77rem',fontWeight:600,color:C.mid}}>Message</label><textarea placeholder="Tell us about your operation..." value={form.message} onChange={e=>upd('message',e.target.value)} style={{...IS,minHeight:80,resize:'vertical'}}/></div><MinBtn label={loading?"Sending...":"Send Enquiry"} icon={<ArrowRight size={15}/>}/></form>}</div></div></div>;}

function Footer({onContact}:{onContact:()=>void}){
  return (
    <footer id="footer" style={{background:C.dark,padding:'4rem 0 2rem'}}>
      <div style={{maxWidth:1160,margin:'0 auto',padding:'0 clamp(1.25rem, 4vw, 2rem)'}}>
        <div className="footer-grid" style={{paddingBottom:'3rem',borderBottom:'1px solid rgba(255,255,255,0.06)',marginBottom:'2rem'}}>
          <div>
            <div style={{fontFamily:'"Playfair Display",serif',fontWeight:700,fontSize:'1.1rem',color:'#fff',marginBottom:'0.75rem'}}>Coop Works<span style={{color:C.amber}}> Consulting</span></div>
            <p style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.85rem',color:'rgba(255,255,255,0.32)',lineHeight:1.78,maxWidth:240,marginBottom:'1.5rem'}}>Data-driven poultry consulting — integration, turnkey, software, and advisory.</p>
            <button onClick={onContact} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'0.6rem 1.25rem',borderRadius:4,background:C.amber,color:'#fff',fontFamily:'"Inter",sans-serif',fontWeight:600,fontSize:'0.82rem',border:'none',cursor:'pointer'}}>Contact Us <ArrowRight size={13}/></button>
          </div>
          {[{title:'Services',links:['Broiler Integration','Turnkey Operations','Software Platform','Advisory']},{title:'Platform',links:['poultryresourceplanner.com','Owner Login','Logger Login']},{title:'Contact',links:['+91 9019452501','India']}].map(col=><div key={col.title}><div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.28)',marginBottom:'0.85rem'}}>{col.title}</div><div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>{col.links.map(l=><span key={l} style={{fontFamily:'"DM Sans",sans-serif',fontSize:'0.85rem',color:'rgba(255,255,255,0.4)',cursor:'pointer'}}>{l}</span>)}</div></div>)}
        </div>
        <div style={{fontFamily:'"Inter",sans-serif',fontSize:'0.73rem',color:'rgba(255,255,255,0.2)'}}>© {new Date().getFullYear()} Coop Works Consulting. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function HomePage(){const[showContact,setShowContact]=useState(false);useScrollReveal();const oc=()=>setShowContact(true);return <><Navbar onContact={oc}/><main><Hero/><ServicesSection/><IntegrationSection onContact={oc}/><TurnkeySection/><SoftwareSection onContact={oc}/><AboutSection/></main><Footer onContact={oc}/>{showContact&&<ContactModal onClose={()=>setShowContact(false)}/>}</>;}
