//variable ko kaise bnate hai 

// let name = "rohit";
// let age = 20;
//  age =30;
// console.log(name,age);

// const account = 1234;
// console.log(account);

//old tarika 
// var a = 10;
//  var a = 20;

//  if (true){
//     var a = 20;
//  }

//  function fun (){
//     var c= 20;
//  }
//  var b = 30;
// console.log(c);

//data types 
//Primitive data type:
//Number,string , boolean , undefined , null , bigint , symbol


//number
// let a =10;
// let b = 2.4;
// console.log(a,b);

//string
// let c = "strike is coming "
// let d = "sonali";
// console.log(c,d);

//boolean
// let login = true;
// let f = false;
// console.log(login,f);

//undefine
// let user;
// console.log(user);

//bigint
// let num = 123456789086544;
// console.log(num);

//null
// let weather = null;
// console.log(typeof weather);
// console.log(weather);

// let weather = current_weather("Dwarka")
//25
//null
//undefined


//symbol
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1==id2);


//Non primitive data type:
//array , object , function

//array
// let arr = [10,20,11,"rohit",true];
// console.log(arr);
// console.log(typeof arr);
//object

//rohit 12345 18 gen
// let obj = {
//     name:"rohit",
//     account:12345,
//     age:18,
//     category:'gen'
// }

//function

// function add(){
//     console.log("hello");
// }
// add();


//primitive data type is immutable
let a = 20;
a = 10;
let str = 'rohan';
str = 'sohan';
console.log(str);

let c = 20;
let d = c;
d = 40;
console.log(c,d);


//non primitive data type mutable

let arr = [10,20,30,40];
arr.push(90);
arr[0]=70;
console.log(arr);


let obj = {
    name:"mohan",
    age:20,
}
obj.name = "rohan";
obj.name = "aman";

age = 10;
console.log(obj);



