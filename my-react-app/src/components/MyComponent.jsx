import React, {useState} from 'react'

function MyComponent(){
    const [car , setCar] = useState({year:2010, make:'Ford', model:'F150'})

    function handelYearChange(event){
        /*
        - For best practice, use updater functions. They are safer

        - And to allow object assignements in updater funcitons, you apparantly 
          have to enclose the curly braces holding the object with a brace ()

        - Notice how you isolte the an attribute to change it and leave
          every other attribute unchanged {...c, year: event.target.value}
                                            ^ [This thingy over here]
        */
        setCar(c => ({...c, year: event.target.value}))
    }

    function handelModelChange(event){
        setCar(c => ({...c, model: event.target.value}))
    }

    function handelMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }


    return(
        <div>
            <p> Your Car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handelYearChange}/> <br/>
            <input type='text' value={car.make} onChange={handelMakeChange}/> <br/> 
            <input type='text' value={car.model} onChange={handelModelChange}/>
        
        </div>
    )
}

export default MyComponent