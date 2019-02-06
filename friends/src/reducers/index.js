import { LOADING, SUCCESS, FAILURE } from '../actions';

const initialState = {
  friends: [],
  error: '',
  loading: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return {...state, loading: true, friends: [], error: ''};
    case SUCCESS:
      return { ...state, loading: false, friends: action.payload, error: ''};
    case FAILURE: 
      return { ...state, loading: false, friends: [], error: action.payload};
    default: 
      return state;
  }
}