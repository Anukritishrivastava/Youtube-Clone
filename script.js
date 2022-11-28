console.log("hellobaby")
let menuicon= document.querySelector(".menu-icon")
let sidebar= document.querySelector(".side-bar")
let container= document.querySelector(".container")
menuicon.onclick=function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}