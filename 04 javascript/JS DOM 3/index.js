// adding 100  para

// const t1=performance.now();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("this took " + (t2-t1)+ " ms");




//optimising a bit

// const t3=performance.now();
// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//     let element =document.createElement('p');
//     element.textContent='This is Para '+i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("this took " + (t4-t3)+ " ms");




// for fragment 

// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+i;

//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);// 1 Reflow , 1 Repaint






// single threading or one command at a time

// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='Kya haal chall';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();





// ye khuch nhi hai
//Event loop    // philip robert see on yt or on web search loupe

// document.addEventListener('click',function(){
//     console.log('hello bhaiya ');
// });






