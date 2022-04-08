import React from "react";
import Stories from "../components/Stories";
import InputBox from "../components/InputBox";
import Posts from "../components/Posts";

export default function Feed() {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40">
      <div className="max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
        {/* stories */}
        <Stories />
        {/* inputbox */}
        <InputBox />
        {/* posts */}
        <Posts />
      </div>
    </div>
  );
}
