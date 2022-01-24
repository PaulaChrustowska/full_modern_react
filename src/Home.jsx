import React, { useState } from 'react';
import BlogList from './BlogList';

function Home() {
  const [blogs] = useState([
    {
      title: 'Introduce', body: 'Witajcie! W naszej bajce Słoń zagra na fujarce, Pinokio nam zaśpiewa, Zatańczą wkoło drzewa. Tu wszystko jest możliwe,Zwierzęta są szczęśliwe, A dzieci, wiem coś o tym,Latają samolotem.Nikt tutaj nie zna głodu,Nikt tu nie czuje chłodu I nawet - ja nie kłamię Nikt się nie skarży mamie', author: 'Jan Brzechwa', id: 1,
    },
    { title: 'How to make the perfect cake..', author: 'Jaś Fasola', id: 2 },
    {
      title: 'How to survive?', body: 'Fight!', author: 'James Bond', id: 7,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" greet="Hello! Welcome to our world!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Jaś Fasola')} title="John Blog" greet="Hello! Welcome to my world!" />

    </div>
  );
}
/*

Czarno, czarniej, Czarnek

*/

export default Home;
