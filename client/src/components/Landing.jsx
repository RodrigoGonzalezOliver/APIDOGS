import { Link } from 'react-router-dom';
import style from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.Landing}>
      <h1 className={style.h1}>BIENVENIDOS A LA API DOGS</h1>
      <p className={style.p}>La mejor plataforma para encontrar información sobre perros.</p>
      <Link to="/home">
        <button className={style.button}>Ingresar</button>
      </Link>
    </div>
  );
};

export default Landing;