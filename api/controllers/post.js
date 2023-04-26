import { db } from "../db.js";

// GET ALL POSTS
export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts ";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

// GET SINGLE POST
export const getPost = (req, res) => {
  // const q = "SELECT * FROM post WHERE id=?";
  const q =
    "SELECT `username` , `title`,`desc`,p.img,`cat`,`date`,p.id FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.json("from controller");
};

export const deletePost = (req, res) => {
  res.json("from controller");
};

export const updatePost = (req, res) => {
  res.json("from controller");
};
