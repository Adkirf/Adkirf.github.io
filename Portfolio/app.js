function addTouchAnimation(element, callback){
  document.addEventListener("touchstart",e=>{
    if(element.contains(e.target)){
      callback(element);
    }
  });
}
const selectElement = selector=>{
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Errror('element not found');
}
const selectElements = selector=>{
  const elements = document.querySelectorAll(selector);
  if(elements) return elements;
  throw new Errror('elements not found');
}

function PageTransitions() {

  //Home-Touch
  selectElement(".left-home").addEventListener("touchstart",()=>{
    document.querySelector(".flip-box").classList.toggle("switchAdkirf");
  });
  Promise.all(
    selectElement(".home").getAnimations().map((animation)=>animation.finished)).then(
      selectElements(".slide-in").forEach( (e,i)=>{

        setTimeout(()=>{
          let slideIn = i%2===0?"left":"right";
          e.classList.add(slideIn);
        },(1+i)*1000);
      }));


  //Do-Touch
  selectElements(".do-item").forEach((e)=>addTouchAnimation(e,function(e){
    e.classList.add("pushDo");
    setTimeout(()=>{e.classList.remove("pushDo")},"1000");
  }));
  selectElements(".badge").forEach((e)=>addTouchAnimation(e,(e)=>{
    e.classList.toggle("pulseBadge");
  }));
  //Doing-Touch
  selectElements(".blog").forEach((e)=>addTouchAnimation(e,(e)=>{
    e.classList.toggle("focusBlog");
  }));
 

  //Button click actvie class
  selectElements(".control").forEach((e)=>{
    e.addEventListener("click", function(){
      selectElement(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      selectElement(".active").classList.remove("active");
      document.getElementById(this.dataset.id).classList.add("active");
    });
  });

  //Theme and ThemeBtn
  const bodyElement = document.body;
  const currentTheme = localStorage.getItem("currentTheme");

  if(currentTheme){
    bodyElement.classList.add("light-mode");
  }
  selectElement(".theme-btn").addEventListener("click", () => {

    if(bodyElement.classList.contains("light-mode")){
      localStorage.setItem("currentTheme", "themeActive");
    }else{
      localStorage.removeItem("currentTheme");
    }
    bodyElement.classList.toggle("light-mode");

  });

  //Done Content
  selectElement(".s-right").addEventListener("click", ()=> nextSwitchPossible(true));
  selectElement(".s-left").addEventListener("click", () => nextSwitchPossible(false));

  //Doing
  // Swiper
const swiper = new Swiper(".swiper", {
  // How many slides to show
  slidesPerView: 1,
  // How much space between slides
  spaceBetween: 20,
  // Make the next and previous buttons work
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // Make the pagination indicators work
  pagination: {
      el: '.swiper-pagination'
  },
  //Responsive breakpoints for how many slides to show at that view
  breakpoints: {
      // 700px and up shoes 2 slides
      700: {
        slidesPerView: 2
      },
      // 1200px and up shoes 3 slides
      1200: {
          slidesPerView: 3
      }
  }   
});
}

function nextSwitchPossible(switchForwards) {
  let rightSwitch = selectElement(".s-right");
  let leftSwitch =  selectElement(".s-left");
  let doneItems = selectElements(".done-item");
  for (let i = 0; i < doneItems.length; i++) {
    if (switchForwards) {
      doneItems[i].classList.remove("last");
      doneItems[i].classList.replace("current", "last");
      if (doneItems[i].classList.replace("next", "current")) {
        if (i === doneItems.length - 1) {
          rightSwitch.classList.add("list-end");
        } else {
          doneItems[i + 1].classList.add("next");
          leftSwitch.classList.remove("list-end");
        }
        break;
      }
    } else {
      doneItems[doneItems.length - 1 - i].classList.remove("next");
      doneItems[doneItems.length - 1 - i].classList.replace("current", "next");
      if (
        doneItems[doneItems.length - 1 - i].classList.replace("last", "current")
      ) {
        if (doneItems.length - 1 - i === 0) {
          leftSwitch.classList.add("list-end");
        } else {
          doneItems[doneItems.length - i - 2].classList.add("last");
          rightSwitch.classList.remove("list-end");
        }
        break;
      }
    }
  }
}

PageTransitions();
