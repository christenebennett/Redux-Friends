import axios from "axios";
import { Action } from "rxjs/internal/scheduler/Action";

export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const ADD = 'ADD';

export function fetchData() {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
        // console.log(response.data)
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

export function addFriend(friend) {
  return dispatch => {
    axios
      .post('http://localhost:5000/api/friends', friend)
      .then(response => {
        console.log(response.data)
        dispatch({
          type: ADD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: FAILURE,
          payload: "failed to add friend"
        })
      })
  }
}