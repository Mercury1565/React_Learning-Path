import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF');

    function handelColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div>
            <h1> Color Picker </h1>
            <p style={{backgroundColor: color}}> 
                Select a Color: {color}
            </p>

            <label> Select a Color </label>
            <input type='color' value={color} onChange={handelColorChange}/>

        </div>

    )

}

export default ColorPicker