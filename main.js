/*
const { TNG, useState,hooksHeap } = require("./TNG");

const renderObj = () => {
  const [name, setName] = useState("ziye");
  const [role, setRole] = useState("father");

  setName('miranda');
  return { name, role };
};

const withState = TNG(renderObj);

console.log(withState());
console.log(withState());
console.log(hooksHeap);
*/


const {HookComponent} = require('./HookComponent.js');

const instance = new HookComponent();
instance.render();
