import React from 'react'
import { Link } from 'react-router-dom';

function BlogItem({ blog, onDelete }) {
  return (
    <div className="blog-card">
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0,100)}</p>
        <Link to={`/post/${blog._id}`}>Read More</Link>
        <br />
        <Link to={`/edit/${blog._id}`}>✏️ Edit</Link>
        <br /><br />
         <button onClick={() => onDelete(blog._id)}>Delete</button>
    </div>
  );
};

export default BlogItem
