import './App.css';
import MyList from './Components/MyList';
import MyIngridients from './Components/MyIngridients';
import { useState } from 'react';
import uuid from 'react-uuid';

function App() {

const[mealPlans, setMealPlans] = useState([])

const[selectedDay, setSelectedDay] = useState(false)
const addMeal = () =>{
  const newMeal = {
    title: 'Today is...',
    id: uuid(),
    mealForaDay: ''
  }
  setMealPlans([newMeal, ...mealPlans])
}

const deleteDay = (mealId)=>{
setMealPlans(mealPlans.filter(({id})=>id !== mealId))
}

  return (
    <div >
      <MyList 
      mealPlans={mealPlans} 
      addMeal = {addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}
        />
      <MyIngridients />
    </div>
  );
}

export default App;
