interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
}

export function ContentSection({ title, children, reverse = false }: ContentSectionProps) {
  return (
    <div className="relative py-16 md:py-24">
      {/* Background with wave effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${reverse ? 'bg-white' : 'bg-[#ff1c1c]'}`} />
        {/* Top wave */}
        <div 
          className={`absolute top-0 left-0 right-0 h-[15vh] ${reverse ? 'bg-[#ff1c1c]' : 'bg-white'}`} 
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"
          }}
        />
        {/* Bottom wave */}
        <div 
          className={`absolute bottom-0 left-0 right-0 h-[15vh] ${reverse ? 'bg-[#ff1c1c]' : 'bg-white'}`} 
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${reverse ? 'text-[#ff1c1c]' : 'text-white'}`}>
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}