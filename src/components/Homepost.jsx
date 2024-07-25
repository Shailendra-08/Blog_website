import React from "react";

const Homepost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4 ">
      {/* Left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://cdn.pixabay.com/photo/2024/07/11/17/13/london-8888771_1280.jpg" alt="" className="h-full w-full object-cover" />
      </div>

      {/* Right */}

      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          10 uses of Artificail Intelligence In Day to Day life
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-grey-500 items-center justify-between md:mb-4">
          <p>@ayushmahadule</p>
          <div className="flex space-x-2">
            <p>17/08/24</p>
            <p>17:45</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos pariatur recusandae nemo veritatis debitis consectetur consequuntur minima amet explicabo, nisi dolorum ab, cumque, tempore reiciendis. Sit repellendus numquam expedita ipsam accusantium, ullam reprehenderit?</p>



      </div>
    </div>
  );
};

export default Homepost;
