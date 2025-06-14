import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogItem from '../components/BlogItem';


function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${id}`);
            setBlogs(prev => prev.filter(blog => blog._id !== id));
        } catch (err) {
            console.log('Error deleting blog:',err);
            
        }
    }
    
  return (
    <div>
      <Link to="/create">➕ Create New Blog</Link>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <BlogItem key={blog._id} blog={blog} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;
