const heading = document.getElementsByClassName("acc-head");


console.log(heading);


for(let i=0; i<heading.length; i++){
    heading[i].addEventListener("click", (event)=>{
        // console.log(event.target)
        this.classList.toggle("active");

        
        let p = this.nextElementSibling;
        if (p.style.display === "block") {
          p.style.display = "none";
        } else {
          p.style.display = "block";
        }
    })
}

// heading.forEach(element => {
//     element.addEventListener("click", (event)=> {
//         console.log(event.target);
//     })
// });

  
