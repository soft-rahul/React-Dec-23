const RestaurantCard = ({ name, imageUrl, rating }) => {
  return (
    <div className="res-card">
      <div className="res-visual">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageUrl}`} alt={`${name}`} />
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