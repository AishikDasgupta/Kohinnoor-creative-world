interface ImageSectionProps {
  heading: string;
  subheading: string;
  content: string;
  imageUrl: string;
  imageLeft?: boolean;
}

export function ImageSection({ heading, subheading, content, imageUrl, imageLeft = true }: ImageSectionProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {imageLeft ? (
          <>
            <div className="w-full md:w-1/2">
              <div 
                className="rounded-lg overflow-hidden shadow-xl aspect-square w-full bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2">{heading}</h2>
              <p className="text-[#ff1c64] font-medium text-base md:text-lg">{subheading}</p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{content}</p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2">{heading}</h2>
              <p className="text-[#ff1c64] font-medium text-base md:text-lg">{subheading}</p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{content}</p>
            </div>
            <div className="w-full md:w-1/2">
              <div 
                className="rounded-lg overflow-hidden shadow-xl aspect-square w-full bg-cover bg-center transform hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
} 