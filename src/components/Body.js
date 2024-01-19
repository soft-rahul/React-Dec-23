import { DATA } from "../Constant/restData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <main className="body">
      <div className="searchBar">Search</div>
      <div className="res-container">
        {DATA.map((res) => {
          console.log(res?.info);
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
