import React from "react";
import { Link } from 'react-router-dom';
import style from "../styles/Card.module.css";

const Card = ({ dog }) => {
  if (dog.temperaments && dog.temperaments.length > 0) {
  }

  return (
    <div className={style.card}>
      <div>
        <img className={style.img} src={dog.imagen} alt="img_profile" />
      </div>
      <h1>{dog.nombre}</h1>
      <p>Temperamentos: {dog.temperament}</p>
      <p>Peso: {dog.peso}</p>
      <Link to={`/home/${dog.id}`} className={style.link}>
        <button className={style.button}>Detalles</button>
      </Link>
    </div>
  );
};

export default Card;