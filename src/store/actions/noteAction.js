import actionTypes from './actionTypes';

export default {
  addNote: (note) => ({
    type: actionTypes.ADD_NOTE,
    note,
  }),
};
