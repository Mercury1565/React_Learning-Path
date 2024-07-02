import React, {useState} from 'react'

function MyComponent(){
    const [foods , setFoods] = useState(['Apple', 'Orange'])

    /*
    - What is happening when a new food is added is the button click will trigger
      the addition of food with the name written on the input field...but will
      we get the value in the input element from another element...USING IDS

    */

    function handelAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = '';

        // Use update functions for best practice
        setFoods(f => [...foods , newFood])
    }

    function handelRemoveFood(index){
        // A great use for the filter method !!!
        /*
        The filter method in JavaScript is used to create a new array that 
        contains all elements of the original array that meet a specified 
        condition. The condition is specified using a callback function or
        an arrow function, which you will use now
        */

        setFoods(foods.filter((food, i) => i !== index));
    }


    return(
        <div>
            <h1> List of Foods</h1>

            <ul>
                {foods.map((food, index) => 
                <div key={index}>
                    <li>
                        {food}
                        <button onClick={() => handelRemoveFood(index)}>
                            Remove Food
                        </button>
                    </li>
                </div>)
                }
            </ul>

            <input type='text' id='foodInput' placeholder='enter food'/>
            <button onClick={handelAddFood}>Add Food</button>
        
        </div>
    )
}

export default MyComponent