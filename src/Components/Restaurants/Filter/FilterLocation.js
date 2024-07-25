import React from "react";
import axios from "axios";

const lurl = "https://restaurant-apis.onrender.com/restaurants/";
let mealId = sessionStorage.getItem("mealId")

const FilterLocation = ({rests, restPerLocation}) => {
    let cityUrl;

    const filterAddress = (data) => {
        if(data) {
            return rests.map((item)=>(
                <option key={item.restaurant_id} value={item.location_id}>{item.address}</option>
            ))
        }
    }

    const handleLocation = (e)=>{
        const city = e.target.value
        if(city === 'all') {
            cityUrl = ''
        }
        console.log(city)
        if(cityUrl === '') {
            cityUrl = `${lurl}${mealId}`
        } else {
            cityUrl = `${lurl}${mealId}?location=${city}`
        }
        axios.get(cityUrl).then(res=>restPerLocation(res.data))
    }
    

  return (
    <select className="form-select mx-auto w-75 my-2" onChange={handleLocation}>
        <option value='all'>Select Location</option>
        {filterAddress(rests)}
    </select>
  );
};

export default FilterLocation;
