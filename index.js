let heading = document.getElementsByClassName("acc-head");
let i;

console.log(heading);


for(i=0; i<heading.length; i++){
    heading[i].addEventListener("click", function(){
        // console.log(event.target)
        this.classList.toggle("active");

        
        let para = this.nextElementSibling;
        if (para.style.display === "block") {
          para.style.display = "none";
        } else {
          para.style.display = "block";
        }
    });
}

// heading.forEach(element => {
//     element.addEventListener("click", (event)=> {
//         console.log(event.target);
//     })
// });

  
