import { CDN_URL } from "./constants";

const ResCards = (props) => {
    const {resData} = props;
     const {
         cloudinaryImageId,
         name,
         avgRating,
         cuisines,
         costForTwo,
         deliveryTime,
       } = resData?.info;
     return (
         <div className="resCards">
          <img className="foodI"
          src = {CDN_URL + 
          cloudinaryImageId}
          alt="resLogo"/>
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4 className="rating">{avgRating}</h4>
         <h4>{cuisines}</h4>
         <h4>{costForTwo / 100} For Two</h4>
         <h4>{deliveryTime} minutes</h4>
         </div>
     )
 }

 export default ResCards;