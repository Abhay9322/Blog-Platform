import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <div className='container'>
      <h1>📝 My Blog Platform</h1>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        <Route path='/post/:id' element={<PostDetails />}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
