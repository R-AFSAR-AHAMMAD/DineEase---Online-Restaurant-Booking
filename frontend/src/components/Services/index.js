import React from "react";
import "./index.css";
import Service from "../Service";

const servicesData = [
  {
    id: 1,
    imgUrl: "https://dineeasebyafsar.netlify.app/quality_food.svg",
    head: "QUALITY FOOD",
    para: "We source the finest ingredients from trusted suppliers to ensure every dish meets our high standards of quality and freshness.",
  },
  {
    id: 2,
    imgUrl: "https://dineeasebyafsar.netlify.app/super_taste.svg",
    head: "SUPER TASTE",
    para: "Our skilled chefs craft each meal with passion and expertise, delivering exceptional flavors that delight your palate.",
  },
  {
    id: 3,
    imgUrl: "https://dineeasebyafsar.netlify.app/fast_delivery.svg",
    head: "FAST DELIVERY",
    para: "Experience quick and reliable delivery service. Your meals arrive hot and fresh, right to your doorstep in minutes.",
  },
];

const Services = () => (
  <section className="services">
    <ul className="services-list">
      {servicesData.map(eachService=> <Service key={eachService.id} serviceData={eachService} />)}
    </ul>
  </section>
);

export default Services;
