const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
  bodyElement.classList.add("light-mode");
}
document.querySelector(".theme-btn").addEventListener("click", () => {

  if(bodyElement.classList.contains("light-mode")){
    localStorage.setItem("currentTheme", "themeActive");
  }else{
    localStorage.removeItem("currentTheme");
  }
  bodyElement.classList.toggle("light-mode");

});
document.querySelector(".more").addEventListener("click",()=>{
    document.querySelector(".post-data").classList.toggle("see-more");
});