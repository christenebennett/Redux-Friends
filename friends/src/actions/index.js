import axios from "axios";

export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';

export function fetchData() {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
        console.log(response.data)
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: FAILURE,
          payload: "Uh-oh......."
        })
      })
  }
}