import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        // in dono line ka matlab hai ki yeh navbar pr show hongi and vo bhi clickbale link "home pr clicl krne pr route hoga to Home page" and similarly for about
        <nav>
            <Link to="/Home">Home</Link>             
            <Link to="/About">About</Link>
        </nav>
    )
}
export default Navbar;