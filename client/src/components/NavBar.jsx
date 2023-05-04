import {Link} from "react-router-dom"; 

const navBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                
                </li>
                <li>
                    <Link to="/create">CREATE</Link>
                
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                
                </li>
            </ul>
        </nav>
    )
}

export default navBar;  