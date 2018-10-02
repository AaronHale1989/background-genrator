var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var style = window.getComputedStyle(body);
var random = document.querySelector("button");

window.onload = firstBackground;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function firstBackground() {
	css.textContent = style.getPropertyValue("background");
	color1.value = "#ff0000";
	color2.value = "#FFFF00";
}

random.addEventListener("click", function(){
	color1.value = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
	color2.value = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
	setGradient();
})




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);