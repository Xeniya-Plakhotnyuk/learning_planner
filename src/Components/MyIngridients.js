const MyIngridients = ({selectedDay}) =>{
    return(
        <div className="wholePlan">
    
    <input
        type="text"
        className="myInput"
        placeholder="Your text here..."
        id="title"
        value={selectedDay.title}
    />

    <textarea
    placeholder="your plan here..." />

    <textarea
    placeholder="List of..." />
        </div>
    )
}

export default MyIngridients