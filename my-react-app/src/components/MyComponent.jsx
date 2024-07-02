import React, {useState} from 'react'

function MyComponent(){
    const [cars, setCars] = useState([])

    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handelAddCar(){
        // Use updater function for best practice
        setCars(c => [...cars , {
            year: carYear,
            make: carMake,
            model: carModel
        }]);

        //Reset to default
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    function handelRemoveCar(index){
        setCars(c => cars.filter((car, i) => index !== i))        
    }

    function handelYearChange(event){
        setCarYear(event.target.value)
    }

    function handelMakeChange(event){
        setCarMake(event.target.value)
    }

    function handelModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h1> List of car objects </h1>

            <ul>
                {cars.map((car, index) => 
                    <div key={index}>
                        <li>
                            {car.year} {car.make} {car.model}
                            <button onClick={() => handelRemoveCar(index)}>
                                Remove car
                            </button>
                        </li>
                    </div>)
                }       
            </ul>


            <input 
                type='number' 
                value={carYear} 
                placeholder='enter car year'
                onChange={handelYearChange}
            />
            <input 
                type='text' 
                value={carMake} 
                placeholder='enter car make'
                onChange={handelMakeChange}
            />
            <input 
                type='text' 
                value={carModel} 
                placeholder='enter car model'
                onChange={handelModelChange}
            />
            <button onClick={handelAddCar}> Add Car </button>
        </div>
    );
}

export default MyComponent