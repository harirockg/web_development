// console.log("hello bhai log");

// js basics 2

//object creation

// let rectangle={
//     length:1,
//     breadth:2,

//     draw:function(){
//         console.log("drawing rectangle");
//     }
// };


//factory function

// function createRectangle(len,bre){
//     let rectangle={
//         length:len,
//         breadth:bre,
//         draw:function(){
//             console.log("drawing rectangle");
//         }      
//     };
//     return rectangle;
// }

// rectangle.length;
// rectangle.breadth;
// rectangle.draw();

// let rectangleObj1=createRectangle(5,4);
// let a=createRectangle(10,8);
// let b=createRectangle(15,12);




//or
// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,
//         draw:function(){
//             console.log("drawing rectangle");
//         }      
//     };
// }

//isse bachne ke liye hum factory function ka use karte hai
// let rectangle1={
//     length:1,
//     breadth:2,

//     draw:function(){
//         console.log("drawing rectangle");
//     }
// };

// let rectangle2={
//     length:1,
//     breadth:2,

//     draw:function(){
//         console.log("drawing rectangle");
//     }
// };


//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> First letter of every word is capital -> NumberOfStudents
// constructor  function -> prop /methods -> intialize/define

function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log("drawing rectangle");
    }
}

//object creation using constructor function
let rectangleObj=new Rectangle(1,2);

// rectangleObj.color="yellow";//adding new property
// console.log(rectangleObj);
 
// delete rectangleObj.color;//deleting property
// console.log(rectangleObj);

let Rectangle1=new Function(
    'length','breadth',
`this.length=length;
this.breadth=breadth;   
this.draw=function(){
    console.log("drawing rectangle");
}`);

//Object creation using Rectangle1
let rect=new Rectangle1(2,4);
console.log(rect);



// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


//primitive type passed by value
// let a=10;
// function inc(a){
//     a++;
// }   
// inc(a);
// console.log(a);//10

//reference type passed by reference
// let a={value:10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);//11



// let rectangle={
//     length:2,
//     breadth:4,
// };

// for in loop 
// for(let key in rectangle){
//     // console.log(key);//length breadth
//     // keys are reflected through key variable
//     // values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }


//for of loop -> to iterate iterable objects -> arrays , strings

// it will not work there will be error -> rectangle is not iterable
// for(let key of rectangle){
//     console.log(key);
// }

// this is ok
// for(let key of Object.keys(rectangle)){ //place entries at the place of keys to get both key and value
//     console.log(key);
// }

// if('color' in rectangle){
//     console.log('present');

// }
// else{
//     console.log('absent');
// }



// Cloning an object by iteration
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);


//Object #2 by assign 
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let  src2={value:25};

// let dest=Object.assign({},src,src2);

// console.log(dest);

// src.a++;

// console.log(dest);


//Object #3 by spread operator
let src={
    a:10,
    b:20,
    c:30
};

let dest={...src};

console.log(dest);  

src.a++;

console.log(dest);
