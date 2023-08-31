const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return(
        <div className="plan">
    <h2>Weekly Meal Plan Ideas</h2>
    <button className="button-add" onClick={addMeal}>ADD</button>
    


    <div>
        {mealPlans.map(({title, id, mealForaDay, ingredient}) =>
        <div className={`meal ${id === selectedDay ? "selected" : "deafult"}`}
        onClick={() => setSelectedDay(id)}
        >
         <p>{title}</p>
         <p>{mealForaDay.substring(0, 60)}</p>
          <button className="button-remove" onClick={() => deleteDay(id)}>DELETE</button>   
        </div>
                )}
    </div>
        </div>
    )

}

export default MyList