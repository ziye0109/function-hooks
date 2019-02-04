const hooksContext = require("./hooksContext");

const [fnWrapper] = hooksContext();

const renderString = ()=>{


    return 'hello world';



}

const fnWithState = fnWrapper(renderString);

console.log(fnWithState());