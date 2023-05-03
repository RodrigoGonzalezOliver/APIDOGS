import axios from "axios";
import {GET_DATA} from "./actions-types";

export const getDogs=() =>{
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/dogs");
        
        try{
            dispatch({type: GET_DATA,payload:response.data});
          }
          catch(err)
          {
            console.log(err.message);
          }
    }
}
