import {Link} from "react-router-dom";
import style from "../styles/NavBar.module.css"

const navBar = () =>{
    return(
        <nav>
            <ul className={style.NavBar}>
                <li className={style.li}>
                    <Link className={style.home} to="/home">HOME</Link>
                    <Link className={style.create} to="/create">FORM</Link>
                </li>
            </ul>
        </nav>
    )
}

export default navBar;  