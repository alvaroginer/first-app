import "./card.css";

export const Card = () => {
  return (
    <div className="event-card grid-cell margin--bt__24">
      <div className="event-card--image position-relative">
        <img
          className="max-width border-radius__12"
          src="imgs/image-park.jpg"
          alt="Park"
        />
        <button className="fav-button">&#9829;</button>
      </div>
      <div className="event-card--text">
        <h3 className="event-card--text__title">Paseo en el parque</h3>
        <p className="event-card--text__p">23.03.25 11:00h</p>
        <p className="event-card--text__p">Central Park, NY</p>
        <p className="event-card--text__p">Social Event</p>
        <div></div>
      </div>
    </div>
  );
};
