import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function BlogForm() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      if (id) {
        axios.get(`http://localhost:5000/api/blogs/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setContent(res.data.content);
        })
        .catch(err => console.log(err));
      }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, content };
        const request = id 
        ? axios.put(`http://localhost:5000/api/blogs/${id}`,data)
        : axios.post('http://localhost:5000/api/blogs',data);

        request.then(() => navigate('/'))
        .catch(err => console.log(err));
    }
    
  return (
    <form onSubmit={handleSubmit}>

        <input
         type="text"
         placeholder='Blog Title'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
          placeholder='Blog Content'
          value={content}
          onChange={(e) => setContent(e.target.value)} >

          </textarea>

          <button type='submit'> {id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default BlogForm;
