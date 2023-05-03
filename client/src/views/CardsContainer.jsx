import Card from "../components/Card";

const CardsContainer = ({dog}) => {
    return(<div className="cards">
    { dog && dog.map((d)=> {return <Card  key={d.id} d={d}/>})}

</div>)
}

export default CardsContainer;
