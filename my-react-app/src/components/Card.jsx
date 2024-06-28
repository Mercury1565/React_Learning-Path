import ProfilePic from "../assets/ProfilePic.jpg"


function Card(){
    return(
        <div className="card">
            <img className = 'cardImg' alt = 'ProfilePic' src = {ProfilePic}></img>
            <h2> Hermon G.</h2>
            <p> Electrical & Computer Engineer </p>
        </div>
    );
}
export default Card