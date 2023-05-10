import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import style from "../styles/CardContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments } from "../redux/actions";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const temperaments = useSelector((state) => state.temperaments);
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  // Lógica de paginado
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.home}>
      <div className={style.dog}>
        {currentDogs.map((dog) => (
          <Card key={dog.id} dog={dog} temperaments={temperaments} />
        ))}
      </div>
      <div>
        {Array.from({ length: Math.ceil(dogs.length / dogsPerPage) }, (_, index) => (
          <button className={style.pagination} key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
