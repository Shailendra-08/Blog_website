import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("");
  const [cats, setCats] = useState([]);
  const navigate =useNavigate();



  const deleteCategory = (i) => {
    let updateCats = [...cats];
    updateCats.splice(i, 1);
    setCats(updateCats);
  };

  const addCategory = () => {
    let updateCats = [...cats];
    updateCats.push(cat);
    setCat("");
    setCats(updateCats);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userID: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; // Corrected the filename to use file.name
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      // Image uploading to backend
      try {
        const imageUpload = await axios.post(`${URL}/api/upload`, data);
        console.log(imageUpload.data);
      } catch (err) {
        console.log(err);
      }
    }

    // Post upload
    try {
      const res = await axios.post(`${URL}/api/post/create`, post,{ withCredentials: true});
      navigate("/post/post/"+res.data._id)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl text-xl">Create a post</h1>
        <form className="w-full flex flex-col space-y-4 md:space-y-8" onSubmit={handleCreate}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="px-4 py-2 outline-none"
            placeholder="Enter Post title"
          />
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*" // Ensure the input accepts images
            className="px-4"
          />
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                type="text"
                className="px-4 py-2 outline-none"
                placeholder="Enter post Category"
              />
              <div
                onClick={addCategory}
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
              >
                Add
              </div>
            </div>

            {/* Categories  */}
            <div className="flex px-4 mt-3">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-white bg-black rounded-full cursor-pointer p-1 text-sm"
                  >
                    <ImCross />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <textarea
            onChange={(e) => setDesc(e.target.value)}
            rows={15}
            cols={30}
            className="px-4 py-2 outline-none"
            placeholder="Enter Post Description"
          ></textarea>
          <button
            type="submit"
            className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg"
          >
            Create
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
