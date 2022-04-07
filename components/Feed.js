import React from "react";
import Stories from "../components/Stories";
import InputBox from "../components/InputBox";

export default function Feed() {
  return (
    <div className="flex-grow h-screen pt-6 mr-4 overflow-y-auto pb-44 xl:mr-40">
      <div className="mx-auto ">
        {/* stories */}
        <Stories />
        {/* inputbox */}
        <InputBox />
        {/* posts */}
      </div>
    </div>
  );
}
