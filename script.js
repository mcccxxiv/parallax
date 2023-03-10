function parallax(layer, distance, speed){
  const item = document.querySelector(layer);
  item.style.transform = "translateY("+ -distance*speed + "px)";
}
function hrparallax(layer, distance, speed){
  const item = document.querySelector(layer);
  item.style.transform = "translateX("+ -distance*speed + "px)";
}
document.addEventListener('scroll', function() {
  parallax('.e2', window.scrollY, 0.5);
  parallax('.e3', window.scrollY, -0.5);
  hrparallax('.e4', window.scrollY, 0.5);
  hrparallax('.e5', window.scrollY, -0.5);
});