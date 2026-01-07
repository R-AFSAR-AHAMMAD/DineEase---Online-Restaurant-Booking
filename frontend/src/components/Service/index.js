import React from "react";
import './index.css'

const Service = (props) => {
  const {serviceData} = props;
  const { imgUrl,head,para } = serviceData;
  return (
    <li className="service">
      <img alt="service-img" className="service-img" src={imgUrl} />
      <h1>{head}</h1>
      <p>{para}</p>
    </li>
  );
};
export default Service;
