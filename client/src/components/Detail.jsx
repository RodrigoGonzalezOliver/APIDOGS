import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from "../styles/Detail.module.css";
import { searchById } from '../redux/actions';

export default function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const breedDetail = useSelector((state) => state.breedDetail);

    useEffect(() => {
        dispatch(searchById(id));
    }, [dispatch, id]);

    if (!breedDetail) {
        return null;
    }

    const { nombre, image, añosDeVida, peso, altura, temperaments } = breedDetail;
    console.log(breedDetail);

    return (
        <div className={style.detailContainer}>
            <Link to={'/home'} className={style.backDetail}>
                Volver
            </Link>
            <div className={style.details}>
                <div className={style.detailsImg}>
                    <img src={image} alt="" />
                </div>
                <div className={style.detailBreed}>
                    <h1>{nombre}</h1>
                    <div className={style.caracteristBreed}>
                        <div className={style.caracterist}>
                            <h2>Años de vida:</h2>
                            <h3>{añosDeVida}</h3>
                        </div>
                        <div className={style.caracterist}>
                            <h2>peso:</h2>
                            <h3>{peso}</h3>
                        </div>
                        <div className={style.caracterist}>
                            <h2>Altura:</h2>
                            <h3>{altura}</h3>
                        </div>
                    </div>
                    <div className={style.temperamentsDetail}>
                        <h2>Temperaments:</h2>
                        <div className={style.temperamentsInfo}>
                            {temperaments
                                ? temperaments.map((temperament, index) => (
                                      <h2 key={index}>{temperament}</h2>
                                  ))
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}