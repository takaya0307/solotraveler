"use client";
import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

export default function BackgroundImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  children 
}: BackgroundImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 背景画像 */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={75}
        sizes="100vw"
        className="object-cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      {/* コンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
