var a = 10;
let b = 20;
const c = 30;
d = 40;
console.log(typeof(d));
// data type 
let num = 100;
let str = "hello world";
let und ;
let nul = null;
let bool = true;


function add(p,q){
    return p+q;

}
console.log(add(10,12));

let arr=[10,20,30,40];
arr.pop();
arr.push(48);
console.log(arr);


let student={
     NAME : "vikas",
     age:20,
     couse : "b,tech"

}
 
console.log(student);

console.time("test");

for(let i = 0; i < 10000 ; i++){}
 console.timeEnd("test");

 console.group()

 console.count("a");
 console.count("a");
 console.count("a");
 console.count("b");
 console.count("a");
 console.count("c");
 console.count("a");

 // table
 let Student={
    name: "harsh",
    Age:25,
    courses :" cse"

 }
 console.table(Student);
