import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { swiggy_API_Menu, } from "./constants";
import { useParams } from "react-router-dom";

const RestMenu = () => {
    const { resId } = useParams();
     const [restInfo, setRestInfo] = useState(null);
       useEffect(() => {
           fetchMenu();
       },[])

       const fetchMenu =  async () => {
        const data = await fetch(swiggy_API_Menu + resId);
        const json = await data.json();
        console.log(json);
       setRestInfo(json.data);
    }

    if (restInfo === null) return <Shimmer/> ;
     
    const  {name, cuisines, costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
           
    return  (
        <div className="menu">
         <h1>{name}</h1>
         <p> {cuisines.join(".")} - {costForTwoMessage} </p>
         <h2>Menu</h2>
         <ul>
              {
               itemCards.map((item) =>( <li>
                 {item.card.info.name} - {"Rs"}
                 {item.card.info.price/100 || item.card.info.defaulPrice/100 }
                 </li>   )) }
                
         </ul>
        </div>
    )
}

export default RestMenu;