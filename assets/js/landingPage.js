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

Promise.all(
    selectElement(".home-content").getAnimations().map((animation)=>animation.finished)).then(
      selectElements(".slide-in").forEach( (e,i)=>{

        setTimeout(()=>{
          let slideIn = i%2===0?"left":"right";
          e.classList.add(slideIn);
        },(1+i)*1000);
    })
);
