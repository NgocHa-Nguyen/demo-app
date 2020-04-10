import { GET_DATA } from "../types/type";
const initialState = {
  users: [{}]
};
export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_DATA: {
        const newState = {...state}
        newState.users = action.data
        return {...state, users: newState.users};
    }
    default:
      return state;
  }
}