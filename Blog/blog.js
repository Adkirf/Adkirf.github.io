const bodyElement = document.body;
const currentTheme = localStorage.getItem("currentTheme");

if(currentTheme){
  bodyElement.classList.add("light-mode");
}
document.querySelector(".theme-btn").addEventListener("click", (e) => {

  if(bodyElement.classList.contains("light-mode")){
    localStorage.removeItem("currentTheme");

  }else{
    localStorage.setItem("currentTheme", "themeActive");
  }
  bodyElement.classList.toggle("light-mode");
});



document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".menu").classList.toggle("active");
});

let scrollPercentage = ()=>{
  let scrollProgress = document.querySelector(".menu-btn");
  let progressValue = document.querySelector(".progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round(pos * 100 / calcHeight);
  let primary;
  let secondary;
  if(bodyElement.classList.contains("light-mode")){
    primary  = getComputedStyle(document.querySelector(".light-mode")).getPropertyValue('--color-primary');
    secondary = getComputedStyle(document.querySelector(".light-mode")).getPropertyValue('--color-secondary');
  }else{
    primary  = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
    secondary = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');
  }
  scrollProgress.style.background = `conic-gradient(${secondary} ${scrollValue}%, ${primary} ${scrollValue}% )`;
  progressValue.textContent = `${scrollValue}%`;
  if(scrollValue===100){
    document.querySelector(".menu").classList.add("active");
  }else{
    document.querySelector(".menu").classList.remove("active");

  }
}

window.onscroll = scrollPercentage;
