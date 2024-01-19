const RestaurantCard = ({ name, imageUrl, rating }) => {
  return (
    <div className="res-card">
      <div className="res-visual">
        <img src={imageUrl} alt="res-logo" />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>Indian, south Indian, chinese, etc</h4>
        <h4>{rating}</h4>
        <h4>EST 30 minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;