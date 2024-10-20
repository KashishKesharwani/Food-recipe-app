import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {


const {mealid} = useParams();
const [info ,setInfo] = useState();
console.log(mealid);

const getInfo = async() =>{
  
  try {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await get.json();
// console.log(jsonData.meals[0]);
setInfo(jsonData.meals[0])

} catch (error) {
    console.error('Error fetching data:', error);
}
}
if(info != ""){
  getInfo();
}


  return (
    <div>
    {
     
      !info ? "Data not found" :
      <div className='mealInfo'>
      <img src={info.strMealThumb}/>
      <div className='info'>
        <h1 className='font-semibold my-2'>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3 className='font-bold  mt-2 '>Instruction's</h3>
        <p>{info.strInstructions}</p>
      </div>
  </div>


    }
      </div>
    
  )
}

export default MealInfo
