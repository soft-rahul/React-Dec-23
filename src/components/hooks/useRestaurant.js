import { useState, useEffect } from "react";
import { API_MORE_DETAILS } from "../../Constant/restData";

const useRestaurant = (id) => {
  const [resDetails, setResDetails] = useState(null);
  useEffect(() => {
    const fetchMoreDetails = async () => {
      try {
        const response = await fetch(`${API_MORE_DETAILS}${id}`);
        const moreDetails = await response.json();
        setResDetails(moreDetails?.data);
      } catch (err) {
        setResDetails({});
        console.log(err, "more err");
      }
    };
    fetchMoreDetails();
  }, []);
  return resDetails;
};

export default useRestaurant;
