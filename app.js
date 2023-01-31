const sections = document.querySelectorAll(".container");
const sectBtns = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const switchBtn = document.getElementById("switch");
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

  switchBtn.addEventListener("click", () => {
    for (let i = 0; i < doneItems.length; i++) {
      if (doneItems[i].classList.contains("middle")) {
        if (i == doneItems.length - 2) {
          doneItems[i - 1].classList.remove("left");
          doneItems[i].classList.replace("middle", "left");
          doneItems[i + 1].classList.replace("right", "middle");
          doneItems[0].classList.add("right");
        } else if (i == doneItems.length - 1) {
          doneItems[i - 1].classList.remove("left");
          doneItems[i].classList.replace("middle", "left");
          doneItems[0].classList.replace("right", "middle");
          doneItems[1].classList.add("right");
          console.log(1);
        } else if (i == 0) {
          doneItems[doneItems.length - 1].classList.remove("left");
          doneItems[i].classList.replace("middle", "left");
          doneItems[i + 1].classList.replace("right", "middle");
          doneItems[i + 2].classList.add("right");
          console.log(2);
        } else {
          doneItems[i - 1].classList.remove("left");
          doneItems[i].classList.replace("middle", "left");
          doneItems[i + 1].classList.replace("right", "middle");
          doneItems[i + 2].classList.add("right");
          console.log(3);
        }
        return;
      }
    }
  });
}

PageTransitions();
