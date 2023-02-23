const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
  document.body.classList.add("light-mode");
}
document.querySelector(".theme-btn").addEventListener("click", () => {

    if(bodyElement.classList.contains("light-mode")){
      localStorage.removeItem("currentTheme");

    }else{
      localStorage.setItem("currentTheme", "themeActive");
    }
    bodyElement.classList.toggle("light-mode");

});