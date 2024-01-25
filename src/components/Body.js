import { useEffect, useState } from "react";
import { DATA } from "../Constant/restData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer/ShimmerUI";

const Body = () => {
  const [value, setValue] = useState(DATA);
  const [showShimmer, setShowShimmer] = useState(true);
  const clickHandler = () => {
    const topRatedRestaurants = value
      .filter((valueItem) => Number(valueItem?.info?.rating?.rating_text) >= 4)
      .sort(
        (a, b) =>
          Number(b.info.rating.rating_text) - Number(a.info.rating.rating_text)
      );
    setValue(topRatedRestaurants);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      setShowShimmer(!showShimmer);
    }, 2000);

    return () => {
      clearTimeout(id);
    }
  }, [])
  if (showShimmer) {
    return <ShimmerUI />
  }
  return (
    <main className="body">
      <div className="functionality">
        <div className="searchBar">Search</div>
        <button onClick={clickHandler}> Top Restaurants </button>
      </div>
      <div className="res-container">
        {value.map((res) => {
          return (
            <RestaurantCard
              key={res?.info?.resId}
              name={res?.info?.name}
              imageUrl={res?.info?.image?.url}
              rating={res?.info?.rating?.rating_text}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Body;
