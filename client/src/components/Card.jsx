const Card = ({d}) => {
    return(
        <div >
            <div >
               <div > 
              <img src={d.imagen} alt='img_profile' /> 
               </div>
                <h1>{d.nombre}</h1>
                  {/* <p>Temperaments: {d.temperament}</p> */}
                  <p>peso: {d.peso}</p>
                </div>
         </div>
    )
}

export default Card;