import { useEffect, useState } from "react";
import { API_URL } from "../Constant/restData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer/ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  const [realData, setReadData] = useState([]);
  const [filteredData, setFilteredData] = useState(realData);
  const [searchText, setSearchText] = useState("");
  const [showShimmer, setShowShimmer] = useState(true);

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const searchResult = realData.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(searchResult);
  };

  const clickHandler = () => {
    const topRatedRestaurants = realData
      .filter((valueItem) => Number(valueItem?.info?.avgRating) >= 4)
      .sort((a, b) => Number(b.info.avgRating) - Number(a.info.avgRating));
    setFilteredData(topRatedRestaurants);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(API_URL);
        const foodData = await response.json();
        setReadData(
          foodData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredData(
          foodData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setShowShimmer(false);
      } catch {
        console.log(err, "Error");
      }
    };
    fetchInfo();
  }, []);

  if (showShimmer) {
    return <ShimmerUI />;
  }
  return (
    <main className="body">
      <div className="functionality">
        <div className="searchBar">
          <input
            type="text"
            name="searchQuery"
            value={searchText}
            onChange={inputHandler}
          />
          <button onClick={handleSearchClick}> Search </button>
        </div>
        <button onClick={clickHandler}> Top Restaurants </button>
      </div>
      <div className="res-container">
        {filteredData.map((data) => {
          return (
            <Link to={`/restaurant/${data?.info?.id}`}>
              <RestaurantCard
                key={data?.info?.id}
                name={data?.info?.name}
                imageUrl={data?.info?.cloudinaryImageId}
                cuisines={data?.info?.cuisines}
                rating={data?.info?.avgRating}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Body;
