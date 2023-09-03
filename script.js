// handling click event on explore button 
// paragram will swiped and comes at place of button when we click on button 

const explorebtn=document.querySelector("#explore");

// about section 
const aboutEl=document.querySelector(".about");

// event listener 

explorebtn.addEventListener("click", ()=>{
    explorebtn.style.transform=`translate(${500}px)`;
    explorebtn.style.opacity="0";
    aboutEl.style.opacity=".8";
    aboutEl.style.transform=`translateX(${0}px)`;
})