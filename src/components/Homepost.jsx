import React from "react";
import {IF} from "../url"

// esline-disable react/prop-types 

const Homepost = ({post}) => {
  return (
    <div className="w-full flex mt-8 space-x-4 ">
      {/* Left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src={IF +  post.photo} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Right */}

      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
        {post.title}
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between md:mb-4">
          <p>@{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
            <p>{(post.createdAt.toString().slice(11,16))}</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">{post.desc.slice(0,200)+"....Read more"}</p>



      </div>
    </div>
  );
};

export default Homepost;
