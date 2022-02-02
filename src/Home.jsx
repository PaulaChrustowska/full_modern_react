import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const { error, isLoading, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Smile... :)</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
