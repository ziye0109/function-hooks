const hooksContext = () => {
  let stateHeap = {};
  let fnStack = [];

  let fnWrapper = fn => {
    const statefulFn = (...args) => {
      fnStack.push(statefulFn);
      console.log(fnStack);
      try {
        return fn(...args);
      } finally {
        fnStack.pop();
        console.log(fnStack);
      }
    };

    return statefulFn;
  };

  let useState = () => {};

  return [fnWrapper, useState];
};

module.exports = hooksContext;
