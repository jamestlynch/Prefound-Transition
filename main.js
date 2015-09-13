document.addEventListener("DOMContentLoaded", function(event) {
	var days = document.getElementById("days");
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");

	var daysLabel = document.getElementById("days-label");
	var hoursLabel = document.getElementById("hours-label");
	var minutesLabel = document.getElementById("minutes-label");
	var secondsLabel = document.getElementById("seconds-label");

	var numDays = 0;
	var numHours = 0;
	var numMinutes = 0;
	var numSeconds = 0;

	var applicationDeadline = new Date(2015, 8, 13, 10, 00, 00);

	var daysInMillis = 24 * 60 * 60 * 1000;
	var hoursInMillis = 60 * 60 * 1000;
	var minutesInMillis = 60 * 1000;
	var secondsInMillis = 1000;

	var updateTimer = function () {
		numDays = Math.floor((applicationDeadline - Date.now()) / daysInMillis);
		numHours = Math.floor(((applicationDeadline - Date.now()) / hoursInMillis) % 24);
		numMinutes = Math.floor(((applicationDeadline - Date.now()) / minutesInMillis) % 60);
		numSeconds = Math.floor(((applicationDeadline - Date.now()) / secondsInMillis) % 60);

		if (numDays < 0) numDays = "0";
		else if (numDays < 10) numDays = "0" + numDays;
		
		if (numHours < 0) numHours = "0";
		else if (numHours < 10) numHours = "0" + numHours;
		
		if (numMinutes < 0) numMinutes = "0";
		else if (numMinutes < 10) numMinutes = "0" + numMinutes;
		
		if (numSeconds < 0) numSeconds = "0";
		else if (numSeconds < 10) numSeconds = "0" + numSeconds;

		if (numDays == 1) daysLabel.innerHTML = "Day";
		else daysLabel.innerHTML = "Days";
		if (numHours == 1) hoursLabel.innerHTML = "Hour";
		else hoursLabel.innerHTML = "Hours";
		if (numMinutes == 1) minutesLabel.innerHTML = "Minute";
		else minutesLabel.innerHTML = "Minutes";
		if (numSeconds == 1) secondsLabel.innerHTML = "Second";
		else secondsLabel.innerHTML = "Seconds";


		days.innerHTML = numDays;
		hours.innerHTML = numHours;
		minutes.innerHTML = numMinutes;
		seconds.innerHTML =	numSeconds;
	};

	setInterval(function () {
		updateTimer();
	}, 1000);





	var inputClass,
    buttonClass,
    anchorClass,
    classes = new Array(
        "hover-blue", 
        "hover-red", 
        "hover-yellow"
    ); // Available css classes

	function getRandomClass (numClasses) { // Pass number of classes to consider; if 2 only red/blue; if 3 also include yellow
	    numClasses = (typeof numClasses !== 'undefined') ? numClasses : 3; // Default use all 3 classes
	    var randomNumber = Math.floor(Math.random()*numClasses);
	    return classes[randomNumber];
	}

	function hasHoverClass (selector) {
	    for (var i = 0; i < classes.length; i++) {
	        if (selector.hasClass(classes[i])) {
	            return true;
	        }
	    }
	    return false;
	}

	function removeRandomClass (object, objectClasses) {
	    objectClasses = objectClasses.split(" ");
	    objectClasses.forEach(function (objectClass, classIndex, objectClasses) {
	        if (jQuery.inArray(objectClass, classes) !== -1) {
	            object.removeClass(objectClass);
	        }
	    });
	}

	jQuery(".button").hover(
		function(){ jQuery(this).addClass(getRandomClass(3)); },
		function(){ removeRandomClass(jQuery(this), jQuery(this).attr("class")); }
	);
});