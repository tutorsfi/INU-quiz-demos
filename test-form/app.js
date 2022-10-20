//variables for buttons
const next1 = document.getElementById("next1"); //form1
const next2 = document.getElementById("next2"); //form2
const back1 = document.getElementById("back1"); //form2
const back2 = document.getElementById("back2"); //form3
const done1 = document.getElementById("done1"); //form3
//variables for selected values
let value1 = 0;
let value2 = 0;
let value3 = 0;
let valueList = [];

//function for hiding current form and displaying the next form
function hideForm(hideId, nextId) {
  document.getElementById(hideId).style.display = "none";
  document.getElementById(nextId).style.display = "block";
}

//button click events to change question forms
next1.addEventListener("click", () => {
  hideForm("form1", "form2");
});

next2.addEventListener("click", () => {
  hideForm("form2", "form3");
});

back1.addEventListener("click", () => {
  hideForm("form2", "form1");
});

back2.addEventListener("click", () => {
  hideForm("form3", "form2");
});

//call the styleStars function
styleStars();

//clicking done button shows valueList array
done1.addEventListener("click", () => {
  document.getElementById("valueP").textContent =
    "All selected values: " + valueList;
  //console.log("🌈" + valueList);
});

//console.log("🌈" + valueList);

// style stars and assign click events to stars
function styleStars() {
  const stars = document.getElementsByClassName("fa-star");
  let clicked = false;
  //console.log(stars);

  //color values for stars (clicked, hovered, not selected)
  const clickColor = "#3eadcf";
  const hoverColor = "#c2e5f0";
  const notSelectedColor = "#f2f2f2";

  // stars change color when clicked

  //form1 stars
  stars[0].addEventListener("click", () => {
    stars[0].style.color = clickColor;
    stars[1].style.color = notSelectedColor;
    stars[2].style.color = notSelectedColor;
    stars[3].style.color = notSelectedColor;
    stars[4].style.color = notSelectedColor;
    value1 = 1;
    valueList.push(value1);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value1;
  });
  stars[1].addEventListener("click", () => {
    stars[0].style.color = clickColor;
    stars[1].style.color = clickColor;
    stars[2].style.color = notSelectedColor;
    stars[3].style.color = notSelectedColor;
    stars[4].style.color = notSelectedColor;
    value1 = 2;
    valueList.push(value1);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value1;
  });
  stars[2].addEventListener("click", () => {
    stars[0].style.color = clickColor;
    stars[1].style.color = clickColor;
    stars[2].style.color = clickColor;
    stars[3].style.color = notSelectedColor;
    stars[4].style.color = notSelectedColor;
    value1 = 3;
    valueList.push(value1);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value1;
  });
  stars[3].addEventListener("click", () => {
    stars[0].style.color = clickColor;
    stars[1].style.color = clickColor;
    stars[2].style.color = clickColor;
    stars[3].style.color = clickColor;
    stars[4].style.color = notSelectedColor;
    value1 = 4;
    valueList.push(value1);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value1;
  });
  stars[4].addEventListener("click", () => {
    stars[0].style.color = clickColor;
    stars[1].style.color = clickColor;
    stars[2].style.color = clickColor;
    stars[3].style.color = clickColor;
    stars[4].style.color = clickColor;
    value1 = 5;
    valueList.push(value1);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value1;
  });

  //form2 stars
  stars[5].addEventListener("click", () => {
    stars[5].style.color = clickColor;
    stars[6].style.color = notSelectedColor;
    stars[7].style.color = notSelectedColor;
    stars[8].style.color = notSelectedColor;
    stars[9].style.color = notSelectedColor;
    value2 = 1;
    valueList.push(value2);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value2;
  });
  stars[6].addEventListener("click", () => {
    stars[5].style.color = clickColor;
    stars[6].style.color = clickColor;
    stars[7].style.color = notSelectedColor;
    stars[8].style.color = notSelectedColor;
    stars[9].style.color = notSelectedColor;
    value2 = 2;
    valueList.push(value2);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value2;
  });
  stars[7].addEventListener("click", () => {
    stars[5].style.color = clickColor;
    stars[6].style.color = clickColor;
    stars[7].style.color = clickColor;
    stars[8].style.color = notSelectedColor;
    stars[9].style.color = notSelectedColor;
    value2 = 3;
    valueList.push(value2);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value2;
  });
  stars[8].addEventListener("click", () => {
    stars[5].style.color = clickColor;
    stars[6].style.color = clickColor;
    stars[7].style.color = clickColor;
    stars[8].style.color = clickColor;
    stars[9].style.color = notSelectedColor;
    value2 = 4;
    valueList.push(value2);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value2;
  });
  stars[9].addEventListener("click", () => {
    stars[5].style.color = clickColor;
    stars[6].style.color = clickColor;
    stars[7].style.color = clickColor;
    stars[8].style.color = clickColor;
    stars[9].style.color = clickColor;
    value2 = 5;
    valueList.push(value2);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value2;
  });

  //form3 stars
  stars[10].addEventListener("click", () => {
    stars[10].style.color = clickColor;
    stars[11].style.color = notSelectedColor;
    stars[12].style.color = notSelectedColor;
    stars[13].style.color = notSelectedColor;
    stars[14].style.color = notSelectedColor;
    value3 = 1;
    valueList.push(value3);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value3;
  });
  stars[11].addEventListener("click", () => {
    stars[10].style.color = clickColor;
    stars[11].style.color = clickColor;
    stars[12].style.color = notSelectedColor;
    stars[13].style.color = notSelectedColor;
    stars[14].style.color = notSelectedColor;
    value3 = 2;
    valueList.push(value3);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value3;
  });
  stars[12].addEventListener("click", () => {
    stars[10].style.color = clickColor;
    stars[11].style.color = clickColor;
    stars[12].style.color = clickColor;
    stars[13].style.color = notSelectedColor;
    stars[14].style.color = notSelectedColor;
    value3 = 3;
    valueList.push(value3);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value3;
  });
  stars[13].addEventListener("click", () => {
    stars[10].style.color = clickColor;
    stars[11].style.color = clickColor;
    stars[12].style.color = clickColor;
    stars[13].style.color = clickColor;
    stars[14].style.color = notSelectedColor;
    value3 = 4;
    valueList.push(value3);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value3;
  });
  stars[14].addEventListener("click", () => {
    stars[10].style.color = clickColor;
    stars[11].style.color = clickColor;
    stars[12].style.color = clickColor;
    stars[13].style.color = clickColor;
    stars[14].style.color = clickColor;
    value3 = 5;
    valueList.push(value3);
    clicked = true;
    document.getElementById("valueP").textContent = "selected value: " + value3;
  });

  // stars change color on hover

  // fist star
  stars[0].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[0].style.color = hoverColor;
      stars[1].style.color = notSelectedColor;
      stars[2].style.color = notSelectedColor;
      stars[3].style.color = notSelectedColor;
      stars[4].style.color = notSelectedColor;
    }
  });
  // if user is only hovering and not clicking
  // the color returns to grey on mouseout
  stars[0].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[0].style.color = notSelectedColor;
    }
  });
  // second star
  stars[1].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[0].style.color = hoverColor;
      stars[1].style.color = hoverColor;
      stars[2].style.color = notSelectedColor;
      stars[3].style.color = notSelectedColor;
      stars[4].style.color = notSelectedColor;
    }
  });
  stars[1].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[0].style.color = notSelectedColor;
      stars[1].style.color = notSelectedColor;
    }
  });
  // third star
  stars[2].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[0].style.color = hoverColor;
      stars[1].style.color = hoverColor;
      stars[2].style.color = hoverColor;
      stars[3].style.color = notSelectedColor;
      stars[4].style.color = notSelectedColor;
    }
  });
  stars[2].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[0].style.color = notSelectedColor;
      stars[1].style.color = notSelectedColor;
      stars[2].style.color = notSelectedColor;
    }
  });
  // fourth star
  stars[3].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[0].style.color = hoverColor;
      stars[1].style.color = hoverColor;
      stars[2].style.color = hoverColor;
      stars[3].style.color = hoverColor;
      stars[4].style.color = notSelectedColor;
    }
  });
  stars[3].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[0].style.color = notSelectedColor;
      stars[1].style.color = notSelectedColor;
      stars[2].style.color = notSelectedColor;
      stars[3].style.color = notSelectedColor;
    }
  });
  // fifth star
  stars[4].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[0].style.color = hoverColor;
      stars[1].style.color = hoverColor;
      stars[2].style.color = hoverColor;
      stars[3].style.color = hoverColor;
      stars[4].style.color = hoverColor;
    }
  });
  stars[4].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[0].style.color = notSelectedColor;
      stars[1].style.color = notSelectedColor;
      stars[2].style.color = notSelectedColor;
      stars[3].style.color = notSelectedColor;
      stars[4].style.color = notSelectedColor;
    }
  });

  // form2 fist star
  stars[5].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[5].style.color = hoverColor;
      stars[6].style.color = notSelectedColor;
      stars[7].style.color = notSelectedColor;
      stars[8].style.color = notSelectedColor;
      stars[9].style.color = notSelectedColor;
    }
  });
  stars[5].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[5].style.color = notSelectedColor;
    }
  });
  // form2 second star
  stars[6].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[5].style.color = hoverColor;
      stars[6].style.color = hoverColor;
      stars[7].style.color = notSelectedColor;
      stars[8].style.color = notSelectedColor;
      stars[9].style.color = notSelectedColor;
    }
  });
  stars[6].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[5].style.color = notSelectedColor;
      stars[6].style.color = notSelectedColor;
    }
  });
  // form2 third star
  stars[7].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[5].style.color = hoverColor;
      stars[6].style.color = hoverColor;
      stars[7].style.color = hoverColor;
      stars[8].style.color = notSelectedColor;
      stars[9].style.color = notSelectedColor;
    }
  });
  stars[7].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[5].style.color = notSelectedColor;
      stars[6].style.color = notSelectedColor;
      stars[7].style.color = notSelectedColor;
    }
  });
  // form2 fourth star
  stars[8].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[5].style.color = hoverColor;
      stars[6].style.color = hoverColor;
      stars[7].style.color = hoverColor;
      stars[8].style.color = hoverColor;
      stars[9].style.color = notSelectedColor;
    }
  });
  stars[8].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[5].style.color = notSelectedColor;
      stars[6].style.color = notSelectedColor;
      stars[7].style.color = notSelectedColor;
      stars[8].style.color = notSelectedColor;
    }
  });
  // form2 fifth star
  stars[9].addEventListener("mouseover", () => {
    if (!clicked) {
      stars[5].style.color = hoverColor;
      stars[6].style.color = hoverColor;
      stars[7].style.color = hoverColor;
      stars[8].style.color = hoverColor;
      stars[9].style.color = hoverColor;
    }
  });
  stars[9].addEventListener("mouseout", () => {
    if (!clicked) {
      stars[5].style.color = notSelectedColor;
      stars[6].style.color = notSelectedColor;
      stars[7].style.color = notSelectedColor;
      stars[8].style.color = notSelectedColor;
      stars[9].style.color = notSelectedColor;
    }
  });

  // form3 stars have no hover styling yet because
  // after a star has been clicked on any form,
  // hover styles do not work with current code
}
