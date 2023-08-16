import React from 'react'
import '../cssFile/Home.css';
import HomeProduct  from './HomeProduct';
import HomeSlide  from './HomeSlide';
import About from './About';
import Contact from './Contact';
import UserCreation from './UserCreation'

const Home = () => {
  

  return (
    <main className={"home"}>
          <HomeSlide />
          <HomeProduct />
    </main>
  );
};

export default Home;
