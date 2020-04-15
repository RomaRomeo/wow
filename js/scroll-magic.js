const tl = gsap.timeline({paused: true});
tl.from("h2", {scale: 0.7, autoAlpha: 0});

const startY = innerHeight / 10;
const finishDistance = innerHeight / 5;

document.addEventListener("scroll", function() {
  if (!requestId) {
    requestId = requestAnimationFrame(update);
  }
});

update();

function update() {
  tl.progress((scrollY - startY) / finishDistance);
  
  requestId = null;
}