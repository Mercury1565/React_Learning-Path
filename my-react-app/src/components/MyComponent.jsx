import React , {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("initial state");
    const [age , setAge] = useState(0);

    const updateName = () => {
        setName("hermon")
    }

    const updateAge =() =>{
        setAge(age + 1);
    }
    
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> set name </button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>

        </div>
    )
}

export default MyComponent