import { useParams } from "react-router-dom";
import { API_MORE_DETAILS } from "../Constant/restData";

import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer/ShimmerUI";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurant from "./hooks/useRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();

  const resDetails = useRestaurant(id);
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
