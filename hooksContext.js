const hooksContext = () => {
  let stateHeap = {};
  let fnStack = [];

  let fnWrapper = fn => {
    const statefulFn = (...args) => {
      fnStack.push(statefulFn);
      try {
        return fn(...args);
      } finally {
        fnStack.pop();
      }
    };

    return statefulFn;
  };

  let useState = initalState => {
    const currentFn = fnStack[fnStack.length - 1];
    if (!stateHeap[currentFn]) {
      const newState = {
        nextIndex: 0,
        state: initalState ? [initalState] : []
      };
      stateHeap[currentFn] = newState;
    }
    const { state, nextIndex } = stateHeap[currentFn];

    return [state[nextIndex], () => {}];
  };

  return [fnWrapper, useState];
};

module.exports = hooksContext;
