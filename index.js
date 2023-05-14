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
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    })
}

// heading.forEach(element => {
//     element.addEventListener("click", (event)=> {
//         console.log(event.target);
//     })
// });

  
