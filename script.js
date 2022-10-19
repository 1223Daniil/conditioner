const toTop = document.querySelector(".navigation");
window.addEventListener("scroll" , () => {
if (window.pageYOffset > 500){
    toTop.classList.add("active");}
    else{
        toTop.classList.remove("active");
    }



})


toTop.onclick = () => {
window.scrollTo(0,0);

};


