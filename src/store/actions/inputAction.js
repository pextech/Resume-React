import actionTypes from './actionTypes';

export default {
  setInputName: (name) => ({
    type: actionTypes.SET_INPUT_NAME,
    name,
  }),
  setInputMail: (email) => ({
    type: actionTypes.SET_INPUT_MAIL,
    email,
  }),
  setInputMessage: (message) => ({
    type: actionTypes.SET_INPUT_MESSAGE,
    message,
  }),
  setLoading: (loading) => ({
    type: actionTypes.SET_LOADING,
    loading,
  }),
  setError: (error) => ({
    type: actionTypes.SET_ERROR,
    error,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  }),
};
