// console.log("hello coders");

// // function declaration
// function run(){
//     console.log("running");
// }

// //calling the function isko uper niche kahi bhi likh sakte ho
// run();


// // Named function assignment 
// let stand=function walk(){
//     console.log("walking");
// };


// //anonymous function assignment
// let stand2=function (){
//     console.log("walking");
// };

// stand(); // we cant call walk() directly because its scope is limited to the function itself

// let jump=stand;
// jump();

// stand2();






// function sum(a,b){
//     let total =0;
//     for(let value of arguments){
//         total=total+value;
//     }
//     return total;
//     //return a+b;
// }   

// console.log(sum(2,3));
// //or 
// let ans=sum(2,3);
// console.log(ans);
// console.log(sum(5,6,8,7,54)); // it will ignore extra arguments

// let ans=sum(1,2,3,4);
// console.log(ans);






//...    Rest Operator

// function sum(num,value, ...args){  //num ke andar 1 chala jayega value ke andar 2  ...args ke bad nhi kuch jaega
//     console.log(args);
// }
// sum(1,2,3,4,5,6);





//default parameters

// function interest(p,r=5,y=12){// here r=5 is default parameter
//     return p*r*y/100;
// }
// console.log(interest(1000,10,2));
// console.log(interest(1000)); // it will take default value of r and y
// console.log(interest(1000,7)); // it will take default value of y only
// console.log(interest(1000,undefined,3)); // it will take default value of r only ,hack only dont use undefined in real code
// console.log(interest(1000,undefined,undefined)); // it will take default value of r and y,hack only dont use undefined in real code




// // getters and setters
// // getter -> accessor property
// // setter -> change or mutate property


// let person={
//     fname:"harivansh",
//     lname:"chauhan",
//     get fullName(){
//         return `${person.fname}    ${person.lname}`; 
//     },
//     set fullName(value){
//         if(typeof value !=="string"){ //for try and catch 
//             throw new Error("you have sent a non string value");
//         }
//         let parts=value.split(" ");
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }

// }



// console.log(person);

// function fullName(){
//     return `${person.fname}       ${person.lname}`; // template literal space dekhne ke liye
// }

// issue -> read only 

// console.log(fullName());

// person.fullName='Harivansh chauhan'; // setter called
// console.log(person.fullName); // setter called








// // try and catch for getter setter lines of code
// try{
//     // person.fullName='Harivansh chauhan';  // bindas chalega lekin 1 dalne pe alert dega
//     // person.fullName=1;
//     person.fullName=true;
// }
// catch(e){
//     // alert('you have sent a number in full name');
//     alert(e);
// }

// console.log (person.fullName); 






// {
//     let a=5; //bas isi block ke andar hi accessible hoga
//     console.log(a);
// }

// {
//     var a=10; //pure function ke andar kahi bhi accessible hoga
//     console.log(a);
// }
// console.log(a);





// function walk(){
//     var a=10;
    
// }

// console.log(a); // error a is not defined because var is function scoped






// for(let i=0;i<5;i++){
// }

// console.log(i);// nhi chalega 

// for(var j=0;j<5;j++){
// }       
// console.log(j);// chalega 5 print karega




// let(true){
//     let a=5;
// }
// console.log(a); // error a is not defined because let is block scoped if there is var instead of let it will work





// function a(){
//     const ab=5;
// }
// const ab=5
// function b(){
//     const ab=5;
// }





// // sorting
// let a=[5,3,8,1];
// a.sort(function(a,b){
//     return a-b;  //for ascending order
// });
// console.log(a);

// a.sort(function(a,b){
//     return b-a;  //for descending order
// });
// console.log(a);




// // summing array elements
// let arr=[1,2,3,4];
// let total=0;
// for(let value of arr){
//     total=total+value;
// }
// console.log(total);


// using reduce method
let arr=[1,2,3,4];// negative se koi fark nhi padega
let toatalSum=arr.reduce((accumulator,currentValue) => accumulator + currentValue,0); // 0 is initial value of accumulator{
console.log("printing total sum:");
console.log(toatalSum);