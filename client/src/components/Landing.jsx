import { Link } from 'react-router-dom';
import style from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <h1>Bienvenidos a PI-Dogs</h1>
      <p>La mejor plataforma para encontrar información sobre perros.</p>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default Landing;