import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogCreationPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform local validations
    if (!title || !description || !content) {
      alert("Please fill in all fields");
      return;
    }

    // Process the blog submission here
    // You can send the data to an API or perform any other action

    // Clear the form
    setTitle("");
    setDescription("");
    setContent("");

    alert("Blog submitted successfully!");
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`blog-creation-page ${darkMode ? "dark" : ""}`}>
      <button onClick={handleToggleDarkMode}>
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
