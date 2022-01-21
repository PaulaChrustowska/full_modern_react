import React, { useState } from 'react';

function Home() {
  const [blogs] = useState([
    {
      title: 'My new website', body: 'Witajcie! W naszej bajce Słoń zagra na fujarce, Pinokio nam zaśpiewa, Zatańczą wkoło drzewa. Tu wszystko jest możliwe,Zwierzęta są szczęśliwe, A dzieci, wiem coś o tym,Latają samolotem.Nikt tutaj nie zna głodu,Nikt tu nie czuje chłodu I nawet - ja nie kłamię Nikt się nie skarży mamie', author: 'Jan Brzechwa', id: 1,
    },
    { title: 'How to make the perfect cake..', author: 'Jaś Fasola', id: 2 },
    {
      title: 'How to survive?', body: 'Fight!', author: 'James Bond', id: 7,
    },
  ]);

  return (
    <div className="home">
      <BlogList />
    </div>
  );
}

export default Home;
