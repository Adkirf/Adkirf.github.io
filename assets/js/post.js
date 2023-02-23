var swiper = new Swiper(".post-swiper", {
    direction: "vertical",
    freeMode: true,
    spaceBetween:10,
    slidesPerView: "auto",
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
/*   var swiper = new Swiper(".post-swiper", {
    slidesPerView: "auto",
    direction: "vertical",
    freeMode: true,
    mousewheel: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); */

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", ()=>openMenu(false));
const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
  document.body.classList.add("light-mode");
}
document.getElementById("theme").addEventListener("click", () => {
    if(bodyElement.classList.contains("light-mode")){
      localStorage.removeItem("currentTheme");

    }else{
      localStorage.setItem("currentTheme", "themeActive");
    }
    bodyElement.classList.toggle("light-mode");

});

function openMenu(isAutomated){
  if(!isAutomated||window.innerWidth>800){
    document.querySelector(".post-container").classList.toggle("second-column");
    menuBtn.classList.toggle("close");
    document.querySelector(".side-menu").classList.toggle("active");
  }
}

openMenu(true);