const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

next1.onclick = function () {
  form1.style.left = "-580px";
  form2.style.left = "40px";
  styleHearts()
};
back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "580px";
};
next2.onclick = function () {
  form2.style.left = "-580px";
  form3.style.left = "40px";
  styleHearts()
};
back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "580px";
};

const hearts = document.getElementsByClassName("fa-star");
let clicked = false;

const clickColor = "#3eadcf";
const hoverColor = "#c2e5f0";
const notSelectedColor = "#f2f2f2";

let heartsArr = []

heartsArr.push(hearts)
console.log(heartsArr);

document.onload = styleHearts();

function styleHearts() {
    // hearts change color when clicked
hearts[0].addEventListener("click", () => {
  hearts[0].style.color = clickColor;
  hearts[1].style.color = notSelectedColor;
  hearts[2].style.color = notSelectedColor;
  hearts[3].style.color = notSelectedColor;
  hearts[4].style.color = notSelectedColor;
  clicked = true;
});
hearts[1].addEventListener("click", () => {
  hearts[0].style.color = clickColor;
  hearts[1].style.color = clickColor;
  hearts[2].style.color = notSelectedColor;
  hearts[3].style.color = notSelectedColor;
  hearts[4].style.color = notSelectedColor;
  clicked = true;
});
hearts[2].addEventListener("click", () => {
  hearts[0].style.color = clickColor;
  hearts[1].style.color = clickColor;
  hearts[2].style.color = clickColor;
  hearts[3].style.color = notSelectedColor;
  hearts[4].style.color = notSelectedColor;
  clicked = true;
});
hearts[3].addEventListener("click", () => {
  hearts[0].style.color = clickColor;
  hearts[1].style.color = clickColor;
  hearts[2].style.color = clickColor;
  hearts[3].style.color = clickColor;
  hearts[4].style.color = notSelectedColor;
  clicked = true;
});
hearts[4].addEventListener("click", () => {
  hearts[0].style.color = clickColor;
  hearts[1].style.color = clickColor;
  hearts[2].style.color = clickColor;
  hearts[3].style.color = clickColor;
  hearts[4].style.color = clickColor;
  clicked = true;
});

// hearts change color on hover

// fist heart
hearts[0].addEventListener("mouseover", () => {
  if (!clicked) {
    hearts[0].style.color = hoverColor;
    hearts[1].style.color = notSelectedColor;
    hearts[2].style.color = notSelectedColor;
    hearts[3].style.color = notSelectedColor;
    hearts[4].style.color = notSelectedColor;
  }
});
// if user is only hovering and not clicking
// the color returns to grey on mouseout
hearts[0].addEventListener("mouseout", () => {
  if (!clicked) {
    hearts[0].style.color = notSelectedColor;
  }
});
// second heart
hearts[1].addEventListener("mouseover", () => {
  if (!clicked) {
    hearts[0].style.color = hoverColor;
    hearts[1].style.color = hoverColor;
    hearts[2].style.color = notSelectedColor;
    hearts[3].style.color = notSelectedColor;
    hearts[4].style.color = notSelectedColor;
  }
});
hearts[1].addEventListener("mouseout", () => {
  if (!clicked) {
    hearts[0].style.color = notSelectedColor;
    hearts[1].style.color = notSelectedColor;
  }
});
// third heart
hearts[2].addEventListener("mouseover", () => {
  if (!clicked) {
    hearts[0].style.color = hoverColor;
    hearts[1].style.color = hoverColor;
    hearts[2].style.color = hoverColor;
    hearts[3].style.color = notSelectedColor;
    hearts[4].style.color = notSelectedColor;
  }
});
hearts[2].addEventListener("mouseout", () => {
  if (!clicked) {
    hearts[0].style.color = notSelectedColor;
    hearts[1].style.color = notSelectedColor;
    hearts[2].style.color = notSelectedColor;
  }
});
// fourth heart
hearts[3].addEventListener("mouseover", () => {
  if (!clicked) {
    hearts[0].style.color = hoverColor;
    hearts[1].style.color = hoverColor;
    hearts[2].style.color = hoverColor;
    hearts[3].style.color = hoverColor;
    hearts[4].style.color = notSelectedColor;
  }
});
hearts[3].addEventListener("mouseout", () => {
  if (!clicked) {
    hearts[0].style.color = notSelectedColor;
    hearts[1].style.color = notSelectedColor;
    hearts[2].style.color = notSelectedColor;
    hearts[3].style.color = notSelectedColor;
  }
});
// fifth heart
hearts[4].addEventListener("mouseover", () => {
  if (!clicked) {
    hearts[0].style.color = hoverColor;
    hearts[1].style.color = hoverColor;
    hearts[2].style.color = hoverColor;
    hearts[3].style.color = hoverColor;
    hearts[4].style.color = hoverColor;
  }
});
hearts[4].addEventListener("mouseout", () => {
  if (!clicked) {
    hearts[0].style.color = notSelectedColor;
    hearts[1].style.color = notSelectedColor;
    hearts[2].style.color = notSelectedColor;
    hearts[3].style.color = notSelectedColor;
    hearts[4].style.color = notSelectedColor;
  }
});

}



