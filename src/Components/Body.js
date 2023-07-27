import ResCards from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "./constants";


const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);


   useEffect(() => {
     fetchData();
   }, [])

   const fetchData = async () => {
     const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      console.log(json);
      setListOfRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRes(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

   
    return listOfRes.length === 0 ? <Shimmer/> : (
    <div className="body">
    <div className="filter">
    <div className="search">
      <input type="text" className="searchBox" value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}/>
      <button className="searchbtn"
      onClick={() => {
          const filteredRes = listOfRes.filter((r) => 
            r.data.name.toUpperCase().includes(searchText.toUpperCase()) 
          );
          setFilteredRes(filteredRes);
      }}
      >Search</button>
    </div>
    <button className="filter-btn" onClick={() => {
   const filteredList = listOfRes.filter((r) => r.data.avgRating > 4 );
   setListOfRes(filteredList);
} }> Top Rated Restaurants</button>
    </div>
    <div className="restab">
    {
        filteredRes.map(restaurant => 
        <ResCards key={restaurant.info.id} resData={restaurant}/>)
    }
    </div>
    </div>
    )
    }

    export default Body;