const sections = document.querySelectorAll(".container");
const sectBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const rightSwitch = document.querySelectorAll(".switch-btn")[0];
const leftSwitch = document.querySelectorAll(".switch-btn")[1];
const doneItems = document.querySelectorAll(".done-item");

function addGlobalEventListener(type, selector, callback){
  document.addEventListener(type, e => {
    if(e.target.matches(selector)) callback(e);
  });
}
function addTouchAnimation(element, callback){
  document.addEventListener("touchstart", e => {
    if(e.target.matches(element)){
      callback(e);
    }
  });
}

function PageTransitions() {
  //Home-Touch
  document.querySelectorAll(".flip-box").ontouchstart = () => 
    document.querySelector(".flip-box").classList.toggle("switchAdkirf");
  ;
  //Do-Touch
  document.querySelector(".hvr-push").addEventListener("touchstart",function(){
    let e = this;
    e.classList.add("pushDo");
    setTimeout(()=>{e.classList.remove("pushDo")},"1000");
  });

/*   document.querySelector(".hvr-pulse").ontouchstart = 
	function(e) {e.classList.toggle("pulseBadge")}; */

  addTouchAnimation(".hvr-pulse",(e)=>{e.classList.toggle("pulseBadge")});
  
  //Done-Touch
  document.querySelector(".current").ontouchstart = 
	function() {this.classList.toggle("touchbtn")};

  //Button click actvie class
  for (let i = 0; i < sectBtns.length; i++) {
    sectBtns[i].addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(this.dataset.id).classList.add("active");
    });
  }
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });

  rightSwitch.addEventListener("click", () => nextSwitchPossible(true));
  leftSwitch.addEventListener("click", () => nextSwitchPossible(false));
}

function nextSwitchPossible(switchForwards) {
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
