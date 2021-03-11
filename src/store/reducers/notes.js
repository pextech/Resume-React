import actionTypes from '../actions/actionTypes';
import saveNote from '../actionHandlers/saveNote';

const initialState = {
  notes: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NOTE: {
      const notes = [...state.notes];
      notes.push(action.note);
      saveNote(notes[0]);
      return {
        notes,
      };
    }
    default:
      return state;
  }
};
