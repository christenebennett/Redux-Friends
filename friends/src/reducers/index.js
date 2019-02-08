import { LOADING, SUCCESS, FAILURE, ADD_FRIEND, DELETE_FRIEND, EDIT_FRIEND } from '../actions';

const initialState = {
  friends: [],
  error: '',
  loading: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, loading: true, friends: [], error: ''};
    case SUCCESS:
      return { ...state, loading: false, friends: action.payload, error: ''};
    case FAILURE: 
      return { ...state, loading: false, friends: [], error: action.payload};
    case ADD_FRIEND: 
      return {...state, loading: false, friends: action.payload, error: ''};
    case DELETE_FRIEND:
      return {...state, loading: false, friends: action.payload, error: ''};
    case EDIT_FRIEND:
      return {...state, loading: false, friends: action.payload, error: ''};
    default: 
      return state;
  }
}