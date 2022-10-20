var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
	$fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();


function selectValue(val) {
  if(val == 0) {
    document.getElementById('rangeValue').innerText = 'Select a value';
  } else {
    document.getElementById('rangeValue').innerText = val / 20;
  }
}

//oninput="rangeValue.innerText=this.value / 20"