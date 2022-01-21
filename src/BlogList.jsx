import React from 'react';

function BlogList({ blogs, title, greet }) {
  // const { blogs } = props;
  // const { title } = props;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      <h2>{ greet }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            Written by
            {blog.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;