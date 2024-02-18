import { useParams } from "react-router-dom";
import { API_MORE_DETAILS } from "../Constant/restData";

import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer/ShimmerUI";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    const fetchMoreDetails = async () => {
      try {
        const response = await fetch(`${API_MORE_DETAILS}${id}`);
        const moreDetails = await response.json();
        setResDetails(moreDetails?.data);
        console.log(moreDetails?.data, "log");
      } catch (err) {
        setResDetails({});
        console.log(err, "more err");
      }
    };
    fetchMoreDetails();
  }, []);

  if (!resDetails) {
    return <ShimmerUI />;
  }

  return (
    <RestaurantMenu
      name={resDetails?.cards[0]?.card?.card?.info?.name}
      imageId={resDetails?.cards[0]?.card?.card?.info?.cloudinaryImageId}
    />
  );
};

export default RestaurantDetails;
