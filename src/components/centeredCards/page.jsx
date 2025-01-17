import React from 'react';
import './centeredCards.scss';

const CenteredCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="imgBx">
          <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Person" />
        </div>
        <div className="details">
          <p>Explore More</p>
        </div>
      </div>
    </div>
  );
};

export default CenteredCard;

