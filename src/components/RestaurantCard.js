import { IMAGE_API } from "../Constant/restData";

const RestaurantCard = ({ name, imageUrl, rating, cuisines }) => {
  const showCuisines = cuisines.length > 3 ? cuisines.slice(0, 2) : cuisines;
  return (
    <div className="res-card">
      <div className="res-visual">
        <img
          src={`${IMAGE_API}${imageUrl}`}
          alt={`${name}`}
        />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{[...showCuisines, "etc"].join(", ")}</h4>
        <h4>{rating}</h4>
        <h4>EST 30 minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
