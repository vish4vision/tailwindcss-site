var sliderMonth = document.getElementById("myMonth");
var output = document.getElementById("valueMonth");

output.innerHTML = sliderMonth.valueMonth;

sliderMonth.oninput = function () {
    output.innerHTML = this.valueMonth;
}

sliderMonth.addEventListener("mousemove", function () {
    var x = sliderMonth.valueMonth;
    var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214,214,214)' + x + '%)';
    sliderMonth.style.background = color;
});

