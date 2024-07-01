import Pic from "../assets/react.svg"

function ImageButton(){

    const clickHandler = (event) => {
        event.target.style.display = "none";
        console.log("image clicked and destroyed");
    }

    return(
        <img onClick={(e) => {clickHandler(e)}} src = {Pic} alt = 'Pic'/>
    )

}

export default ImageButton