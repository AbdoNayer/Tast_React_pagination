import React, { useState, useEffect } from 'react';
import './App.css';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

import axios from 'axios';

function App() {

  const [posts, setPosts]                   = useState([]);
  const [loading, setLoading]               = useState(true);
  const [currentPage, setCurrentPage]       = useState(1);
  const [postsPerPage]                      = useState(10);
  const [API]                               = useState('https://jsonplaceholder.typicode.com/')

  useEffect(() => {
    axios.get(`${API}posts`).then((data)=>{
      setPosts(data.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
      alert('Error API');
    });
  });

  
  const indexOfLastPost     = currentPage * postsPerPage;
  const indexOfFirstPost    = indexOfLastPost - postsPerPage;
  const currentPosts        = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate            = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
    {
      loading ?
      <h2 className='text-center'>Loading...</h2>
      :
      <div className='container mt-5'>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    }
    </div>
    
  );
}

export default App;
