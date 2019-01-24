let state = {};
let currentIndex = 0;

const useState = initialState => {
  let index = currentIndex;
  currentIndex++;

  const setState = newState => {
    state[index] = newState;
  };

  if (!state[index]) {
    state[index] = initialState;
  }

  return [state[index], setState];
};

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ziye");
  const [dev, setDev] = useState({ name: "ziye", skill: "javascript" });

  const UI = `
    <> 
        <div>COUNT</div>
        <div>${count}</div>
        <div>NAME</div>
        <div>${name}</div>
        <div>DEV</div>
        <div>${JSON.stringify(dev)}</div>
    </>`;

  setCount(count + 1);
  setName(name + 1);
  setDev({ ...dev, count });

  return UI;
};

const withState = Component => (...args) => {
  currentIndex = 0;
  return Component(...args);
};
const render = env => Component => env(Component());

render(console.log)(withState(FunctionalComponent));
render(console.log)(withState(FunctionalComponent));
render(console.log)(withState(FunctionalComponent));
