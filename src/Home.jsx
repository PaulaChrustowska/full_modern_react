import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('oooops, could not fetch the data');
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, 1000);

  return (
    <div className="home">
      {error && <div>{ error }</div> }
      {isLoading && <div>One moment...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" greet="Hello! Welcome to our world!" />}
    </div>
  );
}
/*

Czarno, czarniej, Czarnek

*/

export default Home;
