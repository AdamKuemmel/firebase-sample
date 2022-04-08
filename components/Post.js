import { useState, useRef } from "react";
import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, email, timestamp, image, postImage }) {
  const [showComment, setShowComment] = useState(false);
  const inputRef = useRef(null);
  const showCommetInput = (e) => {
    e.preventDefault();
    setShowComment(true);
  };

  const sendCommentInput = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setShowComment(false);
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 mt-5 bg-white shadow-sm rounded-t-2xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt=""
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 bg-white md:h-96">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex items-center justify-between text-gray-400 bg-white border-t shadow-md rounded-b-2xl">
        <div className="rounded-none inputIcon rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        {showComment ? (
          <>
            <form className="flex flex-1">
              <input
                className="flex-grow h-12 px-5 bg-gray-100  focus:outline-none"
                type="text"
                ref={inputRef}
                placeholder={`Enter Comment ${name}`}
              ></input>
              <button onClick={sendCommentInput}>Sumbit</button>
            </form>
          </>
        ) : (
          <div className="rounded-none inputIcon" onClick={showCommetInput}>
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </div>
        )}

        <div className="rounded-none inputIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
