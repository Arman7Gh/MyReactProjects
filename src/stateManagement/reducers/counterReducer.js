import {
  decreaseCounter,
  increaseCounter,
  setCounter,
  resetCounter
} from "../actions/counterActions";

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER_DECREASE": {
      return {
        counter: state.counter - 1
      };
    }
    case "COUNTER_INCREASE": {
      return {
        counter: state.counter + 1
      };
    }
    case "COUNTER_RESET": {
      return {
        counter: 0
      };
    }
    case "COUNTER_SET": {
      return {
        counter: action.payload
      };
    }
    default:
      return state;
  }
};


export default counterReducer;
