import style from "../styles/Card.module.css";

const Card = ({d}) => {
    return(
        <div className={style.card}>
               <div >
              <img className={style.img} src={d.imagen} alt='img_profile' /> 
               </div>
                <h1>{d.nombre}</h1>
                  {/* <p>Temperaments: {d.temperament}</p> */}
                  <p>peso: {d.peso}</p>
                </div>
    )
}

export default Card;