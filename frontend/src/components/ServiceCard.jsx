import React from "react";
const ServiceCard = ({ title, description, price }) => {
  return (
    <article className="card service-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </article>
  );
};

export default ServiceCard;
