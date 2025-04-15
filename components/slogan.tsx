// Renamed from image-section.tsx to sun-decor.tsx
"use client";

import Image from "next/image";
import sunDesign from "public/picture_KCW-removebg-preview.png";

export function SunDecor() {
  return (
    <div className="flex w-full items-center px-0 py-0 relative">
      {/* Left Column: 80% Text */}
      <div className="w-4/5 text-left p-4">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-purple-800 leading-tight whitespace-pre-line">
          WE{"\n"}
          CREATE{"\n"}
          WAYS{"\n"}
          FOR{"\n"}
          ARTIST&apos;S
        </h3>
      </div>

      {/* Right Column: 20% Image pinned to right edge */}
      <div className="w-1/5 flex justify-end items-center pr-0 md:pr-1">
        <Image
          src={sunDesign}
          alt="Sun Design"
          width={150}
          height={130}
          loading="lazy"
          decoding="async"
          className="object-contain sm:height-{0}"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}
