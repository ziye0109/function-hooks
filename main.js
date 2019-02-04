const hooks = require("./functionHooks");

const [ get1, set1 ] = hooks();

console.log(get1());

set1(1);
set1(2);
set1(3);

console.log(get1());


