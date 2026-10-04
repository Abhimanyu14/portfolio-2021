/*window.onscroll = function() {
	scrollFunc()
};

function scrollFunc() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

function responsiveNavFunc() {
	var x = document.getElementById("navbar");
	var child = document.getElementsByClassName("nav_btn");
	if (x.className === "topnav") {
		x.className += " responsive";
		var y = document.getElementById("name_in_navigation");
		x.removeChild(y);
	} else {
		x.className = "topnav";
		var node = document.createElement("p");
		var textnode = document.createTextNode("ABHIMANYU");
		node.appendChild(textnode);
		node.id = "name_in_navigation";
		x.appendChild(node);
	}
}

// Add active class to the current button (highlight it)	
var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("nav_btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
		responsiveNavFunc();
	});
}

window.onscroll = function() {   
	myFunction()
};

var offset1 = document.getElementById("my_pic").offsetTop;
var offset2 = document.getElementById("edu_qualification").offsetTop;
var offset3 = document.getElementById("what_i_do").offsetTop;
var offset4 = document.getElementById("tech_skills").offsetTop;
var offset5 = document.getElementById("footer").offsetTop;

var btns = header.getElementsByClassName("nav_btn");
function myFunction() {
	if (window.pageYOffset < offset2) {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[4].className += " active";
	} else if (window.pageYOffset >= offset2 && window.pageYOffset < offset3 ) {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[3].className += " active";
	} else if (window.pageYOffset >= offset3 && window.pageYOffset < offset4 ) {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[2].className += " active";
	} else if (window.pageYOffset >= offset4 && window.pageYOffset < offset5 ) {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[1].className += " active";
	} else if (window.pageYOffset >= offset5) {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		btns[0].className += " active";
	}
} */