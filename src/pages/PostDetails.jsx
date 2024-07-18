import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const PostDetails = () => {
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black md:text-3xl">
            Use of Artificial Intelligence In real life
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              {" "}
              <BiEdit />{" "}
            </p>
            <p>
              {" "}
              <MdDelete />{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@ayushmahadule</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>

        <img
          src="https://cdn.pixabay.com/photo/2024/07/11/17/13/london-8888771_1280.jpg"
          alt=""
          className="w-full mx-auto mt-8"
        />
        <p className="mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          accusamus quibusdam corporis veritatis! Ut similique nobis doloribus
          labore libero tempore natus aut quae, delectus distinctio cumque
          voluptatem deserunt ea adipisci quas assumenda repellat, non
          repudiandae earum. Incidunt, repellat officiis. Sequi blanditiis vitae
          neque doloribus. Exercitationem quod non explicabo nesciunt,
          laboriosam odio ad cum necessitatibus molestiae nobis asperiores
          ducimus!
        </p>

        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
          {/* comments  */}
          <div className="px-2 py-2 bg-gray-200 rounded-lg  my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@ayushmahadule</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/6/24</p>
                <p className="text-gray-500 text-sm">16:35</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Post Bro!!!</p>
          </div>

          {/* comments  */}

          <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-600">@ayushmahadule</h3>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-gray-500 text-sm">16/6/24</p>
                <p className="text-gray-500 text-sm">16:35</p>
                <div className="flex items-center justify-center space-x-2">
                  <p>
                    <BiEdit />
                  </p>
                  <p>
                    <MdDelete />{" "}
                  </p>
                </div>
              </div>
            </div>
            <p className="px-4 mt-2">Nice Post Bro!!!</p>
          </div>
        </div>

        {/* write a comments  */}

        <div className="w-full flex flex-col mt-4 md:flex-row">
            <input className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" type="text" placeholder="Write a comment" />
            <button className="bg-black text-white px-4 py-2 rounded-lg md:w-[20%] mt-4 md:mt-0">Add Comment</button>
        </div>







      </div>

      <Footer />
    </>
  );
};

export default PostDetails;
