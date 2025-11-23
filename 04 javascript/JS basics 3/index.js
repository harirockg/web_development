// console.log("Hello, JS basics 3!");

// let lastName = "Chauhan";

// let firstName=new String("Harivansh");

// let message ='This is \n my \' first \n message';

// by template literals ->     `  `
// let message =`This is  
// my  first ${lastName}   //placeholder
//   message`;
// console.log(message);

// let words=message.split(' ');
// console.log(words);


//date and time

// let now=new Date();
// console.log(now);


// let date=new Date();
// let date2=new Date('2020-01-01');
// let date3=new Date(2020,0,1,10,30,45);
// date3.setFullYear(2008);
// console.log(date3);


// let number=[1,2,3,4,5];
// console.log(number);

// searching

// console.log(number);
// console.log(number.indexOf(4));

//we want to check if  number  is present or not

// if(number.indexOf(4)!==-1){
//     console.log("number found");
// }else{
//     console.log("number not found");
// }

// //best way to search
// console.log(number.includes(4));

// //advance version
// console.log(number.indexOf(9,2));



// let courses=[
//     {no:1, naam:'harivansh'},
//     {no:2, naam:'chauhan'}
// ];

//console.log(courses);



// console.log(courses.indexOf({no:1, naam:'harivansh'})); // it will return -1 because object is reference type

// console.log(courses.includes({no:1, naam:'harivansh'})); // it will return false because object is reference type



// let course=courses.find(function(course){
//     return course.naam==='harivansh';
// }); 

// console.log(course);




// let course=courses.find(function(course){
//     return course.naam==='harivansh';
// });

// console.log(course);


// arrow function
// let course=courses.find((course)=>{
//     return course.naam==='harivansh';
// });

// console.log(course);



// let numbers=[1,2,3,4,5];

// numbers.pop();
// numbers.shift();
// numbers.slice(2,1); // it will not modify original array

// console.log(numbers);



// let numbers=[1,2,3,4,5];
// let numbers2=numbers;

// // numbers=[];
// // let numbers3=numbers;

// // to empty an array
// // numbers.length=0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);
// // console.log(numbers3);


// let first=[1,2,3];
// let second=[4,5,6]; 
// let combined=first.concat(second);
// console.log(combined);
// let Sliced=combined.slice(2,4);
// console.log(Sliced);

// let marks=[10,20,30,40,50,60,70,80];
// let sliced1=marks.slice();
// // let sliced1=marks.slice(2);
// // let sliced1=marks.slice(2,6);

// console.log(sliced1);


// let first=[1,2,3];
// let second=[4,5,6]; 
// let combined=[...first,'a', ...second,'b'];
// console.log(combined);

// // let copy=[...combined];
// let another=[...combined];  
// console.log(another);



// let arr=[1,2,3,4,5,6,7,8,9];

// // for of method
// // for(let value of arr){
// //     console.log(value);
// // }

// // forEach method
// // arr.forEach(function(number){
// //     console.log(number);
// // });


// arr.forEach(number=>console.log(number));


//join arrays

// let numbers=[10,20,30,40,50];
// const joined=numbers.join(',');
// console.log(joined);


//split
// let message="This is my first message";
// let parts=message.split(' ');
// console.log(parts);

// let joined=parts.join('_');
// console.log(joined);


// sorting array
// let numbers=[40,10,50,30,20];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();  
// console.log(numbers);


// let numbers=[1,2,-1,4,-5,3];

// // let filtered=numbers.filter(function(value){
// //     return value>=0;
// // });    

// //by arrow function for only one line 
// let filtered=numbers.filter(value=>value>=0); 

// console.log(filtered);


// let numbers=[7,8,9,10];
// console.log(numbers);
// // let items=numbers.map(function(value){
// //     return 'student_no '+ value;
// // });

// let items=numbers.map(value=>'student_no '+ value);


let numbers=[1,2,-6,-9];
let filtered=numbers.filter(value=>value>=0);

let  items=filtered.map(function(num){{}
return {value:num};
return obj;
});

console.log(items);