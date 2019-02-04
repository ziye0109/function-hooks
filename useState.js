let state;

const useState = initialState => {
  const setState = newState => (state = newState);
  if (!state) {
    state = initialState;
  }
  return [state, setState];
};

const FunctionalComponet = () => {
  const [count, setCount] = useState(0);
  const UI = `
        <div>COUNT</div>
        <div>${count}</div>`;
  setCount(count + 1);
  return UI;
};

const render = env => Component => env(Component());

render(console.log)(FunctionalComponet);
render(console.log)(FunctionalComponet);
render(console.log)(FunctionalComponet);


