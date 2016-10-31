function detailsTapped() {

	document.getElementById("details").classList.add("active");
	document.getElementById("comments").classList.remove("active");

	document.getElementById("comments-menu").classList.add("hidden");
	document.getElementById("details-menu").classList.remove("hidden");

	

	}
	
function commentsTapped() {

	document.getElementById("comments").classList.add("active");
	document.getElementById("details").classList.remove("active");

	document.getElementById("comments-menu").classList.remove("hidden");
	document.getElementById("details-menu").classList.add("hidden");
	
	}