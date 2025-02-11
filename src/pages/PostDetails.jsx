import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../components/Comments";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";
import { IF } from "../url";

const PostDetails = () => {
  const postId = useParams().id;
  // console.log(postId)
  const [post, setPost] = useState([]);
  const [loader, setLoader] = useState(false);
  const [comment, setComments] = useState([]);

  const [commentone, setCommentone] = useState([]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Fetching post

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(URL + "/api/post/" + postId);
      // console.log(res.data)
      setPost(res.data);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  //fetching comments

  const fetchComment = async () => {
    try {
      const res = await axios.get(URL + "/api/comment/post/" + postId);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect for the commments

  useEffect(() => {
    fetchComment();
  }, [postId]);

  // Handling Delete

  const handleDeletePost = async () => {
    try {
      const res = await axios.delete(URL + "/api/post/" + postId, {
        
      });
      // console.log(res.data)
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  // function of Post Comment

  const postComment = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        URL + "/api/comment/create/",
        {
          comment: commentone,
          author: user.username,
          postId: postId,
          userID: user._id,
        },
        { withCredentials: true }
      );
      setCommentone("");

      fetchComment();
      window.location.reload(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <>
      <Navbar />
      {loader ? (
        <div className="h-[80vh] flex justify-center items-center w-full  ">
          <Loader />
        </div>
      ) : (
        <div className="px-8 md:px-[200px] mt-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              {post.title}
            </h1>

            {user?._id === post?.userID && (
              <div className="flex items-center justify-center space-x-2">
                <p>
                  <BiEdit
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/edit/" + postId);
                    }}
                  />
                </p>
                <p>
                  <MdDelete
                    className="cursor-pointer"
                    onClick={handleDeletePost}
                  />
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-2 md:mt-4">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
              <p>{new Date(post.updatedAt).toString().slice(11, 16)}</p>
            </div>
          </div>

          <img src={IF + post.photo} alt="" className="w-full mx-auto mt-8" />
          <p className="mx-auto mt-8">{post.desc}</p>

          <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories</p>
            <div className="flex justify-center items-center space-x-2">
              {post.categories?.map((c, i) => (
                <div key={i} className="bg-gray-300 rounded-lg px-3 py-1">
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            {/* comments  */}

            {comment?.map((c) => (
              <Comments key={c._id} c={c} post={post} />
            ))}

            {/* 
            <Comments />
            <Comments />
            <Comments /> */}

            {/* comments  */}
          </div>

          {/* write a comments  */}

          <div className="w-full flex flex-col mt-4 md:flex-row">
            <input
              onChange={(e) => setCommentone(e.target.value)}
              className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0"
              type="text"
              placeholder="Write a comment"
            />
            <button
              onClick={postComment}
              className="bg-black text-white px-4 py-2 rounded-lg md:w-[20%] mt-4 md:mt-0"
            >
              Add Comment
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default PostDetails;
