import React from 'react';
import Dessert from '../assets/img/Dessert.jpg';
import '../CSS/Home.css';
import HealthyMeals from '../assets/img/Healthy Meals.jpeg';
import QuickSnacks from '../assets/img/Quick Snacks.jpeg';

const Home = () => {
  return (
   <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", padding: "50px 20px", backgroundImage: "url('https://via.placeholder.com/1500x500')", backgroundSize: "cover", color: "#fff" }}>
        <h2>Welcome to Foodie's Paradise</h2>
        <p>Discover delicious recipes, food tips, and much more!</p>
        <button style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#ff5722", color: "#fff", border: "none", cursor: "pointer" }}>
          Explore Now
        </button>
      </section>

      {/* Categories Section */}
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h3>Popular Categories</h3>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          <div style={{ width: "200px", border: "1px solid #ddd", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
            <img src={Dessert} alt="Desserts" style={{ width: "100%", borderRadius: "5px" }} />
            <h4>Desserts</h4>
          </div>
          <div style={{ width: "200px", border: "1px solid #ddd", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
            <img src={HealthyMeals} alt="Healthy Meals" style={{ width: "100%", borderRadius: "5px" }} />
            <h4>Healthy Meals</h4>
          </div>
          <div style={{ width: "200px", border: "1px solid #ddd", borderRadius: "5px", padding: "10px", textAlign: "center" }}>
            <img src={QuickSnacks} alt="Quick Snacks" style={{ width: "100%", borderRadius: "5px" }} />
            <h4>Quick Snacks</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundColor: "#333", color: "#fff", textAlign: "center", padding: "10px 20px", marginTop: "20px" }}>
        <p>&copy; 2024 Foodie's Paradise. All rights reserved.</p>
      </footer>
    </div>

  )
}

export default Home
