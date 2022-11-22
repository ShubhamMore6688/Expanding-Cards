const a = document.querySelectorAll(".panel");
// for(var i = 0; i< a.length; i++){
//     document.querySelectorAll(".panel")[i].addEventListener("click", function(){
//         document.querySelectorAll(".panel").classList.add("active");
//         // console.log("Clicked");
//     });
    
// }

a.forEach((panel) => {
    panel.addEventListener("click", function () {
       removeActiveClass();
        panel.classList.add("active");
    })
})

function removeActiveClass(){
    a.forEach((panel) => {
        panel.classList.remove("active");
    })
}