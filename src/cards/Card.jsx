import "./card.css";

export const Card = () => {
  return (
    <div className="event-card grid-cell margin--bt__24">
      <div className="event-card--image position-relative">
        <img src="imgs/image-park.jpg" alt="Park" />
        <div className="fav-button--container">
          <button className="fav-button">
            <img src="imgs/footprint-dog.svg" alt="Dog Footprint" />
          </button>
          <button className="fav-button">
            <img src="imgs/dots.svg" alt="Dog Footprint" />
          </button>
        </div>
      </div>
      <div className="event-card--text">
        <h3 className="event-card--text__title">Paseo en el parque</h3>
        <div className="display--flex gap__4">
          <p className="event-card--text__p">23.03.25</p>
          <p className="event-card--text__p">11:00 AM</p>
        </div>
        <p className="event-card--text__p">Central Park, NY</p>
        <p className="event-card--text__p">Social Event</p>
        <div>
          <img src="imgs/bone.svg" alt="Bone" />
          <img src="imgs/bone.svg" alt="Bone" />
          <img src="imgs/bone.svg" alt="Bone" />
          <img src="imgs/bone.svg" alt="Bone" />
          <img src="imgs/bone.svg" alt="Bone" />
        </div>
      </div>
    </div>
  );
};
