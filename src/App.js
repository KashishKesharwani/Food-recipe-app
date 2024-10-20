import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './Componet/MainPage';
import MealInfo from './Componet/MealInfo';





function App() {
  return (
    <>
   
<Routes>
  <Route path='/' element={<MainPage/>}></Route>
  <Route path='/:mealid' element={<MealInfo/>}></Route>
</Routes>




  </>
   
  );
  
}

export default App;
