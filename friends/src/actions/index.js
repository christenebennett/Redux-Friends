import axios from "axios";

export const SUCCESS = 'SUCCESS';
export const LOADING = 'LOADING';
export const FAILURE = 'FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const EDIT_FRIEND = 'EDIT_FRIEND';

export function fetchData() {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
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
        dispatch({
          type: ADD_FRIEND,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "failed to add friend"
        })
      })
  }
}

export function deleteFriend(id) {
  return dispatch => {
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        dispatch({
          type: DELETE_FRIEND,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "failed to delete friend"
        })
      })
  }
}

export function editFriend(friend, id) {
  return dispatch => {
    axios
      .put(`http://localhost:5000/api/friends/${id}`, friend)
      .then(response => {
        dispatch({
          type: EDIT_FRIEND,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "failed to edit friend"
        })
      })
  }
}