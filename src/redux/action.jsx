// actions.js
export const addObject = (data) => ({
  type: "ADD_OBJECT",
  payload: data,
});

// reducer.js
const initialState = {
  arrayOfObjects: [],
};

const objectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OBJECT":
      return {
        ...state,
        arrayOfObjects: [...state.arrayOfObjects, action.payload],
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

export default objectReducer;
