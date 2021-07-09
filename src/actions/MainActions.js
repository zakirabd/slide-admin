import { CHANGE_STATE_MAIN, CHANGE_STATE_MERGE_MAIN, RESET_STATE_MAIN } from './types';
import {MAIN_API} from '../APIKey';
import axios from 'axios';
const env = window._env;


export const fetchPresentations = () => dispatch => {
  axios
    .get(`${MAIN_API}presentation=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'presentations', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const fetchSlides = () => dispatch => {
  axios
    .get(`${MAIN_API}slide=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'slides', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const insertSlide= (edit) => async (dispatch) => {

  let resp = {status:"fail"};
  return await  axios
  .post(`${MAIN_API}slayd=insert`, edit).
  then(response => {
      resp.status = "success";
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "edit"
      })
      console.log(response.data)
      return resp;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}

export const insertPresentation = (edit) => async (dispatch) => {
  let resp = {status:"fail"};
  return await  axios
  .post(`${MAIN_API}presentation=insert`, edit).
  then(response => {
      resp.status = "success";
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "edit"
      })
      console.log(response.data)
      return resp;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}

// SOCIAL LINK
export const fetchLinks = () => dispatch => {
  axios
    .get(`${MAIN_API}links=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'links', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const insertLinks = (socials) => async (dispatch) => {
  let resp = {status:"fail"};
  return await  axios
  .post(`${MAIN_API}links=insert`, socials).
  then(response => {
      resp.status = "success";
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "socials"
      })
      console.log(response.data)
      return resp;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}


//---------------- order functions ----------------------
// ------------------- NEW ORDERS ------------------
export const fetchNewOrders = () => dispatch => {
  axios
    .get(`${MAIN_API}newOrders=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'newOrders', value: response.data}
      })
    )
    .catch(err => console.log(err));
};
// ------------------- ACCEPT NEW ORDERS ------------------
export const acceptNewOrders = (id) => dispatch => {
  axios
    .get(`${MAIN_API}newOrder=accept&id=${id}`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'newOrders', value: response.data}
      })
    )
    .catch(err => console.log(err));
};
// ------------------- REMOVE NEW ORDERS ------------------
export const removeNewOrders = (id) => dispatch => {
  axios
    .get(`${MAIN_API}newOrder=remove&id=${id}`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'newOrders', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

// ---------------- WAITING ORDERS -----------------

export const fetchWaitingOrders = () => dispatch => {
  axios
    .get(`${MAIN_API}newOrders=wait`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'waitingOrder', value: response.data}
      })
    )
    .catch(err => console.log(err));
};
// ------------------ READY WAITING ORDERS BTN ---------------------
export const readyWaitingOrders = (id) => dispatch => {
  axios
    .get(`${MAIN_API}newOrder=ready&id=${id}`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'waitingOrder', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

// ---------------PREPARED ORDERS------------

export const fetchPreparedOrders = () => dispatch => {
  axios
    .get(`${MAIN_API}newOrder=prepared`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'preparedOrders', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

// ---------------REMOVED ORDERS------------

export const fetchRemovedOrders = () => dispatch => {
  axios
    .get(`${MAIN_API}newOrders=remove`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'removeOrders', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const fetchNewOrdersTotal = () => dispatch => {
  axios
    .get(`${MAIN_API}newOrders=total`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'newOrdersTotal', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const fetchWaitingOrdersTotal = () => dispatch => {
  axios
    .get(`${MAIN_API}waitingOrders=total`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'waitingOrdersTotal', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const fetchPreparedOrdersTotal = () => dispatch => {
  axios
    .get(`${MAIN_API}preparedOrders=total`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'preparedOrdersTotal', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const fetchRemovingOrdersTotal = () => dispatch => {
  axios
    .get(`${MAIN_API}removingOrders=total`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'removingOrdersTotal', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

// ----------USERS FUNCTIONS --------------------

export const insertNewUser = (users) => async (dispatch) => {
  let resp = {status:"fail"};
  return await  axios
  .post(`${MAIN_API}newUser=insert`, users).
  then(response => {
      resp.status = "success";
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "editUser"
      })
      console.log(response.data)
      return resp;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}

export const fetchUsers = () => dispatch => {
  axios
    .get(`${MAIN_API}newUser=select`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'users', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

export const deleteUser = (id) => dispatch => {
  axios
    .get(`${MAIN_API}newUser=delete&id=${id}`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'users', value: response.data}
      })
    )
    .catch(err => console.log(err));
};

// -------  LOGIN USER----------------
export const loginUser = (login) => async (dispatch) => {
  let resp = {status:"fail"};
  return await  axios
  .post(`${MAIN_API}login=ok`, login).
  then(response => {
      dispatch({
        type: RESET_STATE_MAIN,
        payload: "login"
      })
      return response.data;
     
  })
   .catch(err =>{ resp.status="catch"; return resp;  console.log(err)});
}
//change input actions
  export const changeStateMain = (itemObject) => (dispatch) => { 
    dispatch({
      type: CHANGE_STATE_MAIN,
      payload: itemObject,
    });
  };
  export const resetStateMain = (name) => (dispatch) => {
    dispatch({
      type: RESET_STATE_MAIN,
      payload: name,
    });
  };
  export const changeStateMergeMain = (itemObject) => {
    return {
      type: CHANGE_STATE_MERGE_MAIN,
      payload: itemObject,
    };
  };

 