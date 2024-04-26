import router from "./router.js";

$(document).ready(()=> {
    router.start();
    console.log("document ready!")
});

$("#home-button").on("click",()=>{
    window.location.hash="#home";
});

$("#map-button").on("click",() =>{
    window.scrollTo(0,0);
});

$("#characters-button").on("click",() =>{
    window.scrollTo(0,800);
});

