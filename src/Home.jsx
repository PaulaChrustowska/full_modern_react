import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      { isLoading && <div>One moment...</div> }
      {blogs && <BlogList blogs={blogs} title="All Blogs!" greet="Hello! Welcome to our world!" />}
    </div>
  );
}
/*

Czarno, czarniej, Czarnek

*/

export default Home;
