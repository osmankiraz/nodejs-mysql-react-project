import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log("err => ", err);
      }
    };
    fetchData();
  }, [postId]);

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt=""></img>
        <div className="user">
          <img src="https://picsum.photos/200/300" alt=""></img>
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>

        <h1>{post?.title}</h1>
        {post?.decs}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
