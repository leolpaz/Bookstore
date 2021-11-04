
const CHANGE_CLASS = '/classes/class/CHANGE_CLASS';

const initialState = [true, false];

export const changeClass = () => ({
  type: CHANGE_CLASS,
});

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLASS:
      return state.map(el => !el)     
    default:
      return state;
  }
};

export default classesReducer;