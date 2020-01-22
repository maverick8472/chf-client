import axios from 'axios';
import { GET_MEAL, GET_MEALS, ADD_MEAL, DELETE_MEAL, MEALS_LOADING, CREATE_MEAL_ERROR } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';


// export const getItems = () => dispatch => {
//     dispatch(setItemsLoading());
//     axios
//       .get('/api/items')
//       .then(res =>
//         dispatch({
//           type: GET_MEALS,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch(returnErrors(err.response.data, err.response.status))
//       );
// };

export const getMeals = () => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get('http://localhost:5000/api/meals')
      .then(res =>
        dispatch({
          type: GET_MEALS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};

export const getMeal = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios
      .get(`http://localhost:5000/api/meals/${id}`)
      .then(res =>
        dispatch({
          type: GET_MEAL,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
};


  
//   export const addMeal = item => (dispatch, getState) => {
//     axios
//       .post('/api/items', item, tokenConfig(getState))
//       .then(res =>
//         dispatch({
//           type: ADD_MEAL,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch(returnErrors(err.response.data, err.response.status))
//       );
//   };
// export const addMeal = meal => (dispatch, getState) => {
//     axios
//         .post('http://localhost:5000/api/meals', meal)
//         .then(res => dispatch({type: ADD_MEAL, payload: res.data}))
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// };

export const addMeal = meal => (dispatch, getState) => {
    axios
        .post('http://localhost:5000/api/meals', meal)
        .then(res => dispatch({type: ADD_MEAL, payload: res.data}))
        .catch(err => dispatch({type: CREATE_MEAL_ERROR, err}));
};


  
  export const deleteItem = id => (dispatch, getState) => {
    axios
      .delete(`/api/items/${id}`, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: DELETE_MEAL,
          payload: id
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const setItemsLoading = () => {
    return {
      type: MEALS_LOADING
    };
  };