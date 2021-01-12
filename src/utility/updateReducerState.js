const updateReducerState = (oldState, updatedProperties) => {
  return {
    ...oldState,
    ...updatedProperties,
  };
};

export default updateReducerState;
