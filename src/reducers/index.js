
import users from "./userReducer";
import { combineReducers } from "redux";

const myReducer =  combineReducers({
    users,
    
});
export default myReducer;