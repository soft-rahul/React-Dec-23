import { useEffect, useState } from "react";
import { DATA } from "../Constant/restData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer/ShimmerUI";

const Body = () => {
  const [value, setValue] = useState(DATA);
  const [filteredData, setFilteredData] = useState(DATA);
  const [searchText, setSearchText] = useState("");
  const [showShimmer, setShowShimmer] = useState(true);

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearchClick = () => {
    const searchResult = value.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredData(searchResult);
  }

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
        <div className="searchBar">
          <input type="text" name="searchQuery" value={searchText} onChange={inputHandler} />
          <button onClick={handleSearchClick}> Search </button>
        </div>
        <button onClick={clickHandler}> Top Restaurants </button>
      </div>
      <div className="res-container">
        {filteredData.map((res) => {
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
