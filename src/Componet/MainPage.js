import React, { useState } from 'react'
import MealCards from './MealCards';




const MainPage = () => {
    const [data ,setData] = useState();
    const [search , setSearch] = useState("");
    const [msg , setMsg] = useState("");


    const handleInput = (event) =>{
        setSearch(event.target.value)

    }


    const myFun = async() => {
        if(search == ""){
            setMsg("Please Enter Something")
        }
        else{
            
 try {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await get.json();
      setData(jsonData.meals);  // Set the fetched meal data to the state
} catch (error) {
    console.error('Error fetching data:', error);
}
}


        }


  return (
    <>
   
    <h1 className=' flex justify-center items-center text-3xl font-semibold'>FOOD RECIPE APP</h1>
   <div className='container'>
    <div className='searchBar'>
        <input type='text' placeholder='Enter Dishes' onChange={handleInput}></input>
        <button onClick={myFun}>Search</button> 
    </div>
<h4 className='flex justify-center items-center mt-5'>{msg}</h4>
    <div>
<MealCards detail={data}></MealCards>
    </div>
   </div>

   
    </>
  )
}

export default MainPage
