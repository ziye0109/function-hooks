const hooksContext = require("./hooksContext");

const [fnWrapper, useState,stateHeap,fnStack] = hooksContext();

const renderString = () => {
  const [name, setName] = useState("ziye");
  console.log(name);
  return name;
};

const fnWithState = fnWrapper(renderString);

console.log(fnWithState());
