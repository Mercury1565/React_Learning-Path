function Header(){
    return(
        <header>
            <h1>My first website</h1>
            <nav>
                <ul> 
                    {/* You can add hyperlinks using the <a> tag */}
                    <li> <a href = '#'> Home </a></li>
                    <li> <a href = '#'> Contact </a></li>
                    <li> <a href = '#'> About </a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header