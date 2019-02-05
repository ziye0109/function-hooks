const hooksContext = () => {
  let stateHeap = {};
  let fnStack = [];

  let fnWrapper = fn => {
    const statefulFn = (...args) => {
      if (stateHeap[statefulFn]) {
        stateHeap[statefulFn].nextIndex = 0;
      }

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
        state: []
      };
      stateHeap[currentFn] = newState;
    }
    const { state, nextIndex } = stateHeap[currentFn];
    let currentIndex = nextIndex;
    stateHeap[currentFn].state[currentIndex] = initalState;
    stateHeap[currentFn].nextIndex = nextIndex + 1;
    return [state[currentIndex], newState => (state[currentIndex] = newState)];
  };

  return [fnWrapper, useState, stateHeap, fnStack];
};

module.exports = hooksContext;
