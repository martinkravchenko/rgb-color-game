// Creating colors
var numOfColors = 6
var colors = generateColors(numOfColors)

// Initializing
var goalColor = colors[pickColor()]
var squares = document.querySelectorAll(".square")
var colorGoalDisplay = document.getElementById("colorGoalDisplay")
var h1 = document.querySelector("h1")
var resetB = document.querySelector("#reset")
var easyB = document.querySelector("#easy")
var hardB = document.querySelector("#hard")
var ultraB = document.querySelector("#ultra")
var container = document.querySelector("#container")

setSquares()

easyB.addEventListener("click", function () {
	if (numOfColors != 3) {
		easyB.classList.add("selected")
		hardB.classList.remove("selected")
		ultraB.classList.remove("selected")
		container.innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div>"
		squares = document.querySelectorAll(".square")
		numOfColors = 3
		setSquares()
	}
})

hardB.addEventListener("click", function () {
	if (numOfColors != 6) {
		hardB.classList.add("selected")
		easyB.classList.remove("selected")
		ultraB.classList.remove("selected")
		container.innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>"
		squares = document.querySelectorAll(".square")
		numOfColors = 6
		setSquares()
	}
})

ultraB.addEventListener("click", function () {
	if (numOfColors != 9) {
		ultraB.classList.add("selected")
		hardB.classList.remove("selected")
		easyB.classList.remove("selected")
		container.innerHTML = "<div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div><div class='square'></div>"
		squares = document.querySelectorAll(".square")
		numOfColors = 9
		setSquares()
	}
})

resetB.addEventListener("click", function () {
	setSquares()
})

function setSquares() {
	colors = generateColors(numOfColors)
	goalColor = colors[pickColor()]
	// Displaying the goal color
	colorGoalDisplay.textContent = goalColor

	// Looping through the squares
	for (var i = 0; i < squares.length; i++) {
		// Setting squares' initial color
		squares[i].style.backgroundColor = colors[i]

		// Adding listeners
		squares[i].addEventListener("click", function () {
			// Grab color of clicked square
			var clickedColor = this.style.backgroundColor
			// Compare grabbed color to the goal
			if (clickedColor === goalColor) {
				changeColors(goalColor)
				h1.style.backgroundColor = goalColor
				resetB.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323"
			}
		})
	}

	h1.style.backgroundColor = "steelblue"
	resetB.textContent = "New Colors"
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function pickColor() {
	return Math.floor(Math.random() * colors.length)
}

function generateColors(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}

function randomColor() {
	var R = Math.floor(Math.random() * 256)
	var G = Math.floor(Math.random() * 256)
	var B = Math.floor(Math.random() * 256)
	return "rgb(" + R + ", " + G + ", " + B + ")"
}