import axios from "axios";
import { FETCH_USER, FETCH_SURVEY } from "./types";

// when redux-thunk see we return a function
// instead of action, it call the function
// with dispatch function of redux as argument
export const fetchUser = () => async (dispatch) => {
  // when we done fetching user, call dispatch
  // function with action as argument
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({ type: FETCH_SURVEY, payload: res.data });
};
