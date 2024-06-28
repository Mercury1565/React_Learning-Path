function Food(){
    const food_1 = "Orange"
    const food_2 = "Apple"
    return(
        <ul>
            {/* Notice how you can add JS methods in the JS code enclosed
                in the curly braces
            */}
            <li> {food_1.toLocaleLowerCase()} </li>
            <li> {food_2.toLocaleUpperCase()} </li>
        </ul>
    )

}
export default Food