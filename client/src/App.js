import './App.css';
import {Route} from "react-router-dom";
//import landing from "./views/landing";
import CardsContainer from "./views/CardsContainer";
import {useDispatch, useSelector} from "react-redux";
import { getDogs } from './redux/actions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    document.title = 'PI-Dogs';
      dispatch(getDogs());

  },[])
  const dog = useSelector((state) => state.dogs)
  console.log(dog)
  return (
    <div className="App">
      <Route path="/home">
        <CardsContainer dog={dog} />
      </Route>
    </div>
  );
}

export default App;
