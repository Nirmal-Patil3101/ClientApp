import React from 'react';
import '../CSS/About.css';

const About = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1 className='title'>About Us</h1>
      </header>
      <main className='main'>
        <section className='section'>
          <h2 className='subtitle'>Who We Are</h2>
          <p className='text'>
            Welcome to <strong>Foodie's Paradise</strong>, your ultimate destination for discovering delicious recipes,
            exploring culinary traditions, and finding the best dining spots. Our mission is to bring together food
            enthusiasts from around the world to share their love for good food.
          </p>
        </section>
        <section className='section'>
          <h2 className='subtitle'>Our Mission</h2>
          <p className='text'>
            At Foodie's Paradise, we believe that food connects people. We aim to inspire creativity in the kitchen,
            promote sustainable eating, and celebrate the diverse flavors of the world. Whether you're a seasoned chef
            or just starting, we’re here to guide your culinary journey.
          </p>
        </section>
        <section className='section'>
          <h2 className='subtitle'>Join Us</h2>
          <p className='text'>
            Be part of our community! Explore new recipes, share your culinary adventures, and connect with fellow food
            lovers. Together, we can make every meal memorable.
          </p>
        </section>
      </main>
      <footer className='footer'>
        <p> 2024 Foodie's Paradise. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default About
