let box = document.getElementById("animated-box");
let position = 0;
let interval = setInterval(moveBox, 10);

function moveBox() {
  if (position >= 350) {
    clearInterval(interval);
  } else {
    position++;
    box.style.left = position + "px";
  }
}
