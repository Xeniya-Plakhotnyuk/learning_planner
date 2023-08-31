import "./App.css";
import MyList from "./Components/MyList";
import MyIngridients from "./Components/MyIngridients";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []
  );

  const [selectedDay, setSelectedDay] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
  }, [mealPlans]);

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForaDay: "",
      ingredient: "",
    };
    setMealPlans([newMeal, ...mealPlans]);
  };

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({ id }) => id !== mealId));
  };

  const updatedDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      } else {
        return mealPlan;
      }
    });
    setMealPlans(updatedMeals);
  };

  const getActiveMeal = () => {
    return mealPlans.find(({ id }) => id === selectedDay);
  };

  return (
    <div className="container">
      <MyList
        mealPlans={mealPlans}
        addMeal={addMeal}
        deleteDay={deleteDay}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <MyIngridients selectedDay={getActiveMeal()} updatedDay={updatedDay} />
    </div>
  );
}

export default App;
