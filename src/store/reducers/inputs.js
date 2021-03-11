import actionTypes from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  name: '',
  email: '',
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_NAME: {
      const { name } = action;
      return {
        ...state,
        name,
      };
    }
    case actionTypes.SET_INPUT_MAIL: {
      const { email } = action;
      return {
        ...state,
        email,
      };
    }
    case actionTypes.SET_INPUT_MESSAGE: {
      const { message } = action;
      return {
        ...state,
        message,
      };
    }
    case actionTypes.SET_LOADING: {
      const { loading } = action;
      return {
        ...state,
        loading,
      };
    }
    case actionTypes.SET_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
      };
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
};
