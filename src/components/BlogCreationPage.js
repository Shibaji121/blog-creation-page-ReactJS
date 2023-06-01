import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-toastify";

const BlogCreationPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !content) {
      toast.error("Please Fill in All the Details", {
        theme: !darkMode ? "dark" : "light",
      });
      return;
    }

    setTitle("");
    setDescription("");
    setContent("");
    toast.success("Blog submitted successfully!", {
      theme: !darkMode ? "dark" : "light",
    });
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success("Mode Changed Successfully", {
      theme: darkMode ? "dark" : "light",
    });
  };

  return (
    <div className={`blog-creation-page ${darkMode ? "dark" : ""}`}>
      <button
        className={`toggle-btn ${!darkMode ? "dark" : ""}`}
        onClick={handleToggleDarkMode}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={darkMode ? "dark" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={darkMode ? "dark" : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <Editor
            editorState={content}
            onEditorStateChange={(editorState) => setContent(editorState)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogCreationPage;
