import React from "react";
import Image from "next/image";
export default function StoryCard({ name, src, profile }) {
  return (
    <div className="relative p-3 ease-in transform cursor-pointer h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 overflow-x transition-duration-200 hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute z-50 rounded-full opacity-0 lg:opacity-100 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover rounded-full filter brightness-75 lg:rounded-3xl"
        src={src}
        layout="fill"
      />
    </div>
  );
}
