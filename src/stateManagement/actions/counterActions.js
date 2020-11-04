export const decreaseCounter = () => ( {
  type:"COUNTER_DECREASE"
});

export const increaseCounter = () => ( {
  type:"COUNTER_INCREASE"
});

export const resetCounter = () => ( {
  type:"COUNTER_RESET"
});

export const setCounter = (value) => ({
  type:"COUNTER_SET",
  payload:value
});
