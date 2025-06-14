import React from 'react'

function BlogItem({ blog }) {
  return (
    <div style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
        <h3>{blog.title}</h3>
        <p>{blog.content.slice(0,100)}</p>
        <Link to={`/post/${blog._id}`}>Read More</Link>
        <br />
        <Link to={`/edit/${blog._id}`}>✏️ Edit</Link>
    </div>
  );
};

export default BlogItem
