import React from "react";
import "./index.css";
import PopularDish from "../PopularDish";

const popularDishes = [
  {
    id: 1,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner1.jpeg",
    name: "ROASTED LAMB RUMP",
    category: "Dinner",
  },
  {
    id: 2,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner2.png",
    name: "CITRUS CURED SALMON",
    category: "Dinner",
  },
  {
    id: 3,
    imgUrl: "https://dineeasebyafsar.netlify.app/breakfast1.png",
    name: "STUFFED STRAWBERRY",
    category: "Breakfast",
  },
  {
    id: 4,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner3.png",
    name: "PAN SEARED SEA BASS",
    category: "Dinner",
  },
  {
    id: 5,
    imgUrl: "https://dineeasebyafsar.netlify.app/lunch1.png",
    name: "BEEF BURGER MEAL",
    category: "Lunch",
  },
  {
    id: 6,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner4.png",
    name: "MUSSELS SOUP",
    category: "Dinner",
  },
  {
    id: 7,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner5.png",
    name: "ITALIAN SPAGHETTI",
    category: "Dinner",
  },
  {
    id: 8,
    imgUrl: "https://dineeasebyafsar.netlify.app/dinner6.png",
    name: "GRILLED FISH",
    category: "Dinner",
  },
];

const PopularDishes = () => (
  <section className="popular-dishes">
    <h1 className="popular-dishes-main-head">POPULAR DISHES</h1>
    <p>
      Discover our most beloved dishes, carefully prepared by our expert chefs
      using premium ingredients. Each selection represents the perfect blend of
      tradition, innovation, and culinary excellence.
    </p>
    <ul className="popular-dishes-list">
      {popularDishes.map((dish) => (
        <PopularDish dishData={dish} key={dish.id} />
      ))}
    </ul>
  </section>
);

export default PopularDishes;
