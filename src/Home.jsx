import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: 'Introduce', body: 'Witajcie! W naszej bajce Słoń zagra na fujarce, Pinokio nam zaśpiewa, Zatańczą wkoło drzewa. Tu wszystko jest możliwe,Zwierzęta są szczęśliwe, A dzieci, wiem coś o tym,Latają samolotem.Nikt tutaj nie zna głodu,Nikt tu nie czuje chłodu I nawet - ja nie kłamię Nikt się nie skarży mamie', author: 'Jan Brzechwa', id: 1,
    },
    { title: 'How to make the perfect cake..', author: 'Jaś Fasola', id: 2 },
    {
      title: 'How to survive?', body: 'Fight!', author: 'James Bond', id: 7,
    },
  ]);

  const [name, setName] = useState('Jan Brzechwa');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" greet="Hello! Welcome to our world!" handleDelete={handleDelete} />
      <button onClick={() => setName('Jaś Fasola')}>change name</button>
      <p>
        {' '}
        { name }
        {' '}
      </p>
    </div>
  );
}
/*

Czarno, czarniej, Czarnek

*/

export default Home;
