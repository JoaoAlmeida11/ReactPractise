function add1(a, b){
    return a+b
}
function add2(a){
    return function(b){
        return a+b
    }
}

const add3 = (a, b) =>{
    return a + b
}



const add4 = a => b => a+b;









// function add(a){
//     return function(b){
//         return a + b;
//     }
// }




// // const add1 = add(1);
// // add1(5);
// // its equal to
// add(1)(5);

// const add2 = a => b => a + b;

// with currying
import {compose, pipe} from 'lodash/fp'
// Function Composing
// non-functional programming
let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";
//functional programming
const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));//for more complex problems has to many (); problem solved below

// lodash; import on top
// we currying wrap because pipe only accepts functions that return a function
const transform = pipe(trim, toLowerCase, wrap("div"), wrap("span"));
console.log(transform(input));
