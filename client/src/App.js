import './App.css';
import {Route} from "react-router-dom";
import CardsContainer from "./views/CardsContainer";
import {useDispatch, useSelector} from "react-redux";
import { getDogs } from './redux/actions';
import { useEffect } from 'react';
import Landing from "./components/Landing";
import NavBar from './components/NavBar';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    document.title = 'PI-Dogs';
      dispatch(getDogs());

  },[])
  const dog = useSelector((state) => state.dogs)
  console.log(dog)
  return (
    <nav>
      <NavBar/>
      <div className="App">
        <Route exact path="/" component={Landing}/>
        <Route path="/home">
          <CardsContainer dog={dog} />
        </Route>
      </div>
    </nav>
  );
}

export default App;
