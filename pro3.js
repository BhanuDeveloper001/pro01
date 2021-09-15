// let - 2015 (ES6)
// 1. You cannot redeclare the variable using let keyword
let x='Bhanu';
// let x='Siva';
// let x=10;
console.log(x);

// Scope of var 

var y=10;
//console.log(y)
{
    console.log("var",y);
    var y=20;
    console.log("var",y)
}

// Scope of let 

let z=10;
//console.log("let",z)
{
    //console.log("let",z);
    let z=20;
    console.log("let",z);
}
console.log("let",z)

// Scope of the combination of var & let 
// you cannot reuse a variable 
var abc=123;
console.log(abc);
//let abc=345;
//console.log(abc);

{
    let abc=123;
    console.log(abc);

}

//Trainer='Bhanu';
let Trainer='sahu';
