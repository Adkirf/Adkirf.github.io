const sections = document.querySelectorAll(".container");
const sectBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const rightSwitch = document.querySelectorAll(".switch-btn")[0];
const leftSwitch = document.querySelectorAll(".switch-btn")[1];
const doneItems = document.querySelectorAll(".done-item");

function PageTransitions() {
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
      doneItems[i].classList.remove("left");
      doneItems[i].classList.replace("middle", "left");
      if (doneItems[i].classList.replace("right", "middle")) {
        if (i === doneItems.length - 1) {
          rightSwitch.classList.add("list-end");
        } else {
          doneItems[i + 1].classList.add("right");
          leftSwitch.classList.remove("list-end");
        }
        break;
      }
    } else {
      doneItems[doneItems.length - 1 - i].classList.remove("right");
      doneItems[doneItems.length - 1 - i].classList.replace("middle", "right");
      if (
        doneItems[doneItems.length - 1 - i].classList.replace("left", "middle")
      ) {
        if (doneItems.length - 1 - i === 0) {
          leftSwitch.classList.add("list-end");
        } else {
          doneItems[doneItems.length - i - 2].classList.add("left");
          rightSwitch.classList.remove("list-end");
        }
        break;
      }
    }
  }
}

PageTransitions();
