let hooksHeap = {};
let fnStack = [];

const TNG = fn => {
  const fnWithHooks = (...args) => {
    if (hooksHeap[fnWithHooks]) {
      hooksHeap[fnWithHooks].nextIndex = 0;
    }
    fnStack.push(fnWithHooks);
    try {
      return fn.apply(this, args);
    } finally {
      fnStack.pop();
    }
  };
  return fnWithHooks;
};

const useState = initalState => {
  const currentFn = fnStack[fnStack.length - 1];
  if (!hooksHeap[currentFn]) {
    const newHook = { nextIndex: 0, states: [] };
    hooksHeap[currentFn] = newHook;
  }
  const currentHook = hooksHeap[currentFn];
  if (!(currentHook.nextIndex in currentHook.states)) {
    let newState = [initalState, state => (newState[0] = state)];
    currentHook.states[currentHook.nextIndex] = newState;
  }
  return [...currentHook.states[currentHook.nextIndex++]];
};

module.exports = { TNG, useState, hooksHeap };
