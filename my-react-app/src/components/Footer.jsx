function Footer(){
    return(
        <footer>
            <p> &copy; HermonGet Limited</p>

            {/* To get the current date you can embedd some
                javascript in your tag and use the following
                syntax
            */}
            <p> {new Date().getFullYear()} </p>
        </footer>
    )
}
export default Footer