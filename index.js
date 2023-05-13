let heading = document.querySelectorAll("h3.acc-head");


console.log(heading);




// Array.from(heading).forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

heading.forEach(element => {
    element.addEventListener("click", (event)=> {
        console.log(event.target);
    })
});

  
