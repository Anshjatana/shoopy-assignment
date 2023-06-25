import React from "react";

const Cards = ({
  title,
  description,
  image,
  price,
  paymentMode,
  selectedPaymentMode,
  status,
}) => {
  const showCard =
    selectedPaymentMode === "" || selectedPaymentMode === paymentMode;

  return showCard ? (
    <div className="card" id="card">
      <div id="inside-card">
        <img src={image} alt="Card-img" className="card-image" id="img" />
        <div>
          <h5 className="card-title" id="title">
            {title}
          </h5>
          <p className="card-description" id="description">
            {description}
          </p>
        </div>
      </div>
      <div className="card-right">
        <p className="price">-{price}</p>
        <p className="status">{status}</p>
      </div>
    </div>
  ) : null;
};

export default Cards;
