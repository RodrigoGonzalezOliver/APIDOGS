import Card from "../components/Card";
import style from "../styles/CardContainer.module.css";

const CardsContainer = ({dog}) => {
    return(
    <div className={style.home}>
    <div className={style.dog}>{dog && dog.map((d)=> {return <Card  key={d.id} d={d}/>})}</div>

</div>)
}

export default CardsContainer;
