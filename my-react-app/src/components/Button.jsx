function Button(){

    const handelClick = () => console.log("Hello world!");
    const handelClick2 = (name) => console.log(`Hello ${name}`);
    
    // Make sure to use curly braces for multiple lines in an 
    // arrow function
    let count = 0
    const handelClick3 = () => {
        count ++;
        console.log(`You clicked me ${count} times`);
    };
    
    //CLICK EVENT
    let click_count = 0
    const handelClick4 = (event) => {
        click_count ++;
        event.target.textContent = `Button Pressed ${click_count} times`;
    }


    return(
        <>
        <button onClick={handelClick}>Click Me</button>

        {/* You can't do the below
        if you have a set of parentheses after a callback in a 
        click event, the function will be invoked immedialtely 
        before hitting the button
        */}
        {/* <button onClick={handelClick2("Hermon")}>Click Me</button> */}
        {/* THE SOLUTION */}
        <button onClick={() => handelClick2("Hermon")}>Click Me</button>
        <button onClick={() => handelClick3()}>Counter</button>
        <button onClick={(event) => handelClick4(event)}>click me</button>
        <button onDoubleClick={(event) => handelClick4(event)}>double click me</button>

        
        </>

    )
}

export default Button