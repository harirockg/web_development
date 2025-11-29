// document.addEventListener('click', function(){
//     console.log(" I have clicked the document");
// });

//isme remove nhi kr skte

//or 

//isme remove kr skte

// function eventfuntion(){
//     console.log(" I have clicked the document");
// }
// document.addEventListener('click', eventfuntion);

// document.removeEventListener('click', eventfuntion);





// const content=document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// });



//facebook3 link pr click krne pr kuch na ho

// let links=document.querySelectorAll('a');
// let thirdlink=links[2];

// thirdlink.addEventListener('click', function(event){            
//     event.preventDefault();
//     console.log("maja aya na accha laga bhai");
// });






//to avoid to  many event


// let myDiv=document.createElement('div');

// function paraStatus(event){
//         // console.log('I have clicked on para ');
//         console.log('Para', event.target.textContent,);
// };

// myDiv.addEventListener('click', paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para '+i;

//     // newElement.addEventListener('click', function(event){
//     //     console.log('I have clicked on para '+i);
//     // });

//     // myDiv.addEventListener('click', paraStatus);// ye tab hoga jab function for loop se bahar hoga

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);






//for article
let element=document.querySelector('#wrapper');
element.addEventListener('click', function(event){
    if(event.target.nodeName==='SPAN'){
    console.log('span pr click kiya hai '+ event.target.textContent);
    }
});