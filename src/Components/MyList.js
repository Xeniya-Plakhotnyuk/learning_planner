const MyList = ({mealPlans, addMeal, deleteDay, selectedDay, setSelectedDay}) => {
    return(
        <div className="plan">
    <h2>Weekly Meal Plan Ideas</h2>
    <button className="button-add" onClick={addMeal}>ADD</button>
    


    <div>
        {mealPlans.map(({title, id, mealForaDay}) =>
        <div className={`meal ${id === selectedDay ? "selected" : "deafult"}`}
        onClick={() => setSelectedDay(id)}
        >
         <p>{title}</p>
         <button className="button-remove" onClick={() => deleteDay(id)}>DELETE</button>   
        </div>
                )}
    </div>
        </div>
    )

}

export default MyList