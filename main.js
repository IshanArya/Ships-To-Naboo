window.onload = function() {
	var naboo = $('#naboo');
	var spaceships = $('.spaceship');

	var counter = 0;
	var imparfaitWords = ["arrivais", "arrivais", "arrivait", "arrivions", "arriviez", "arrivaient"];
	var answers = {
		je: "arrivais",
		tu: "arrivais",
		il: "arrivait",
		nous: "arrivions",
		vous: "arriviez",
		ils: "arrivaient"
	}
	spaceships.draggable({
		drag: function(e) {
			if(spaceships.overlaps(naboo).hits[0] === naboo){
				if(answers[e.target.id] === naboo.text()) {
					counter++;
					e.target.remove();
					if(counter === 6) {
						alert('YOU WIN! The answer is "NABOO"');
						naboo.text("NABOO");
					} else {
						setNabooText();
					}
				} else {
					alert("YOU LOSE! GAME OVER :(");
				}
			}
		}
	});

	naboo.on('click', function() {
		alert("Game started!");
		setNabooText();
	});

	function setNabooText() {
		naboo.text(imparfaitWords.splice(Math.floor(Math.random() * imparfaitWords.length), 1)[0]);
	}


	// var clicked;

	// for(var i = 0; i < spaceships.length; i++) {
	// 	spaceships[i].addEventListener('mousedown', mouseDown);
	// }


	// window.addEventListener('mouseup', function mouseUp() {
	// 	window.removeEventListener('mousemove', mouseMoving, true);
	// });

	// function mouseDown() {
	// 	clicked = this;
	// 	this.style.position = "absolute";
	// 	window.addEventListener('mousemove', mouseMoving, true);
	// }

	// function mouseMoving(e) {
	// 	console.log("Y: " + e.clientY);
	// 	console.log("X: " + e.clientX);
	// 	console.log(e.clientX - (clicked.style.marginLeft + (clicked.scrollWidth/2)));
	// 	clicked.style.top = e.clientY + "px";
	// 	clicked.style.left = e.clientX + "px";
	// 	console.log(isCollision(naboo, clicked));
	// }

	// function isCollision(a, b) {
	// 	return !(
	// 	       ((a.style.top + a.style.height) < (b.style.top)) ||
	// 	       (a.style.top > (b.style.top + b.style.height)) ||
	// 	       ((a.style.left + a.style.width) < b.style.left) ||
	// 	       (a.style.left > (b.style.left + b.style.width))
	// 	   );

	// }
}