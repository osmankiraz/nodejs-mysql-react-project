import React from "react";

export const Menu = () => {
  const posts = [
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
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt=""></img>
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
