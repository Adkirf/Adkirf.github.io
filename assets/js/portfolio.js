const selectElement = selector=>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error('element not found');
  }
const selectElements = selector=>{
    const elements = document.querySelectorAll(selector);
    if(elements) return elements;
    throw new Error('elements not found');
}
function addTouchAnimation(element, callback){
  document.addEventListener("touchstart",e=>{
    if(element.contains(e.target)){
      callback(element);
    }
  });
}

selectElements(".control").forEach((e)=>{
    e.addEventListener("click", function(){
      selectElement(".active-control").classList.remove("active-control");
      this.classList.add("active-control");
      selectElement(".active-section").classList.remove("active-section");
      selectElement(`.${this.dataset.id}`).classList.add("active-section");
    });
});

//myProjects
selectElement(".s-right").addEventListener("click", ()=> nextSwitchPossible(true));
selectElement(".s-left").addEventListener("click", () => nextSwitchPossible(false));

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

  //Do-Touch
selectElements(".do-item").forEach((e)=>addTouchAnimation(e,function(e){
    e.classList.add("pushDo");
    setTimeout(()=>{e.classList.remove("pushDo")},"1000");
}));
selectElements(".badge").forEach((e)=>addTouchAnimation(e,(e)=>{
  e.classList.toggle("pulseBadge");
}));