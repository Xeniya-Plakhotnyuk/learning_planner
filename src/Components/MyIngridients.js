const MyIngridients = ({selectedDay, updatedDay}) =>{

    const editMyMeal = (myInput, value) =>{
        updatedDay({
            ...selectedDay,
            [myInput]: value
            
        })
            }

        if(!selectedDay){
            return <p className="plan">Plan your week Ahead!</p>
        }

    return(
        <div className="wholePlan">
    
    <input
        type="text"
        className="myInput"
        placeholder="Your text here..."
        id="title"
        // value={selectedDay.title}
        onChange={(e) => editMyMeal('title', e.target.value)}
    />

    <textarea
    placeholder="your plan here..." 
    id="mealForaDay"
        value={selectedDay.mealForaDay}
        onChange = {(e) => editMyMeal("mealForaDay", e.target.value)}
    />

    <textarea
    placeholder="List of..." 
    id="ingredient"
        value={selectedDay.ingredient}
        onChange = {(e) => editMyMeal("ingredient", e.target.value)}
    />
        </div>
    )
}

export default MyIngridients