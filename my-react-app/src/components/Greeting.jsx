import PropTypes from 'prop-types'

function Greeting(props){
    const greetingMsg = <h2> Hello, {props.username} </h2>
    const failMsg = <h2> Not logged in </h2>

    if(props.isLoggedIn){
        return greetingMsg
    }
    else{
        return failMsg
    }

    // an alternative way of doing the above using ternary operation 
    /*
    return (props.isLoggedIn) ? {greetingMsg}: {failMsg}
                                 

    Ternary operator is most often used than if else statements
    so get use to them cause you will be using them quite often
    */
}

Greeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default Greeting