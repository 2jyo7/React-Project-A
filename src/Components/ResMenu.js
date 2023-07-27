import { swiggy_API_Menu, } from "./constants";

const RestMenu = () => {
     const [restInfo, setRestInfo] = useState(null);
       useEffect(() => {
           fetchMenu();
       },[])

       const fetchMenu =  async () => {
        const data = await fetch(swiggy_API_Menu)
        const json = await data.json();
        console.log(json);
       // setRestInfo(json.data);
    
    }
     //{cuisines.join(".")} - {costForTwoMessage}
    //const  {name, cuisines, costForTwoMessage} = restInfo?.cards[0]?.card?.card?.info;
           
    return restInfo === null ?  ( <Shimmer/> ): (
        <div className="menu">
         <h1></h1>
         <p> </p>
         <h2>Menu</h2>
         <ul>
            <li>Biryani</li>
            <li>Butter Naan</li>
            <li>Gulaab Jamun</li>
         </ul>
        </div>
    )
}

export default RestMenu;