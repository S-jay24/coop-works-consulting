import React from 'react';

type ParallaxSectionProps = {
  backgroundImage: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function ParallaxSection({ backgroundImage, children, style }: ParallaxSectionProps) {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    ...style,
  };
  return <section style={sectionStyle}>{children}</section>;
}
