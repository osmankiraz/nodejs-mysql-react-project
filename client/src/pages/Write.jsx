import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visiblity: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" id="art" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="technology" value="technology" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="sport" value="sport" />
            <label htmlFor="sport">Sport</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="car" value="car" />
            <label htmlFor="car">Car</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="movie" value="movie" />
            <label htmlFor="movie">Movie</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
