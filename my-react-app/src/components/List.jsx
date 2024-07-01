import PropTypes from "prop-types"

function List(props){
    /*
    const items = ['apple' , 'orange' , 'banana'];
    // You can change this list to a list of list items using the map method
    const listItems = items.map(item => <li>{item}</li>);
    */

    // List of objects
    // const items = [{name:"apple" , calories: 10},
    //                 {name:"orange" , calories: 900},
    //                 {name:"banana" , calories: 5},
    //                 {name:"shiro" , calories: 1},
    //                 ]
    // the list item can be defined here or recieved from the parent class as props
    const items = props.items


    // different sorting mechanisms
    /*
    items.sort((a , b) => a.name.localeCompare(b.name)) //Alphabetical
    items.sort((a , b) => b.name.localeCompare(a.name)) //Reverse Alphabetical
    items.sort((a , b) => a.calories - b.calories) // Numeric order
    items.sort((a , b) => b.calories - a.calories) // Reverse Numeric order
    */

    // Filtering based on some condition
    // Filter out items with calories less or equal to 10
    const low_cal_fruits = items.filter(item => item.calories <= 100)

    // Warning: Each child in a list should have a unique "key" prop.
    // To avoid this warning, you add a key to your list items, here, {item.name}
    // Also notice how arrow functions are used, you will use them quite often
    const listItems = low_cal_fruits.map(item => 
                                            <li key = {item.name}> 
                                                {item.name},  
                                                {item.calories}
                                            </li>)

    return(
        <>
            <h1> {props.category} </h1>
            <ul>
                {listItems}
            </ul>
        </>
    )

}

List.defaultProps = {
    items: [],
    category: "Default Category"
}

// Notice how the propTypes are handled
/*
Key take aways:
    PropTypes.arrayOf() -> to define the structure of the array
    PropTypes.shape() -> to individually define what the datatypes of the
                         elements of the objects are

Remember again that violation of defined propTypes will not hinder the running
of the app, it will only raise an error in the console which later might be used
to handel the violation
*/



List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            calories: PropTypes.number
        })),
    category: PropTypes.string
}





export default List