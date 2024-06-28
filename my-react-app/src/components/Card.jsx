import ProfilePic from "../assets/ProfilePic.jpg"
import PropTypes from 'prop-types'


function Card(props){
    return(
        <div className="card">
            <h2> Name: {props.name} </h2>
            <p> Age: {props.age} </p>
            <p> Department: {props.dept} </p>
            <p> Is GC: {props.is_GC ? 'YES' : "NO"}</p>
            {/* Notice the application of the ternary operator
                Boolean values can't be displayed, hence, instead
                we can use ternary operators to display data based 
                on the boolean value
                [BOOLEAN ? 'displayed if true' : 'displayed if false']
            */}
        </div>
    );
}

/*
Prop Types:
With prop types, we can specify what type props are. For instance,
the prop Age has to be of type integer. We can assert this using
prop types

You will need to import Prop Types class for this

Notice that this will not stop the program from running when datatypes
specified are violated. It will just display a warning msg in the 
console
*/

Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    is_GC: PropTypes.bool
}

/*
Default props:
Used for the props that are not passed from the parent component
*/
Card.defaultProps = {
    name: "Guest",
    age: 0,
    dept: "Unspecified",
    is_GC: false
}

export default Card