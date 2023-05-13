const heading = document.getElementsByClassName("acc-head");


console.log(heading);




// Array.from(heading).forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

for(let i=0; i<heading.length; i++){
    heading[i].addEventListener("click", (event)=>{
        console.log(event.target)
    })
}

// heading.forEach(element => {
//     element.addEventListener("click", (event)=> {
//         console.log(event.target);
//     })
// });

  
