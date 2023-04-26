import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log("err => ", err);
      }
    };
    fetchData();
  }, [cat]);

  /*   const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      img: "https://picsum.photos/300/300",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices lorem sed velit maximus ullamcorper. Pellentesque lobortis euismod commodo",
      img: "https://picsum.photos/300/300",
    },
  ]; */

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
