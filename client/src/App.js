import './App.css';
import { Route } from "react-router-dom";
import CardsContainer from "./components/CardContainer";
import { useSelector } from "react-redux";
import Landing from "./components/Landing";
import NavBar from './components/NavBar';
import Detail from './components/Detail';

function App() {
  const dog = useSelector((state) => state.dogs)
  console.log(dog)
  
  return (
    <nav>
      <NavBar/>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={CardsContainer} />
        <Route exact path="/home/:id" component={Detail} />
      </div>
    </nav>
  );
}

export default App;
