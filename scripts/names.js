// Define a Function
function sayOuch() {
    alert('Ouch! Stop poking us!');
}
function sayBoss(){
	alert("Yup. I'm the boss.")
}

// Use a CSS selector to identify an element
var portraitimage = document.querySelector('img');
var cartoonimage = document.querySelector('img')

// Assign the function to the onclick event on that element
portraitimage.onclick = sayOuch;

cartoonimage.onclick = sayBoss;