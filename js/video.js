var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	var playButton = document.getElementById("play");
    playButton.addEventListener("click", function() {
        video.play();
    });

	var pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", function() {
        video.pause();
    });

	var pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", function() {
        video.pause();
    });

	var slowerButton = document.getElementById("slower");
    slowerButton.addEventListener("click", function() {
        var currentPlaybackRate = video.playbackRate;
        var newPlaybackRate = currentPlaybackRate - 0.1;
        video.playbackRate = newPlaybackRate;
        console.log("New Speed: " + newPlaybackRate);
    });

	var fasterButton = document.getElementById("faster");
    fasterButton.addEventListener("click", function() {
        var currentPlaybackRate = video.playbackRate;
        var newPlaybackRate = currentPlaybackRate + 0.1;
        video.playbackRate = newPlaybackRate;
        console.log("New Speed: " + newPlaybackRate);
    });

	var skipButton = document.getElementById("skip");
    skipButton.addEventListener("click", function() {
        var currentLocation = video.currentTime;
        video.currentTime = currentLocation + 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log("Current Location: " + video.currentTime);
    });

	var mute = this.document.getElementById("mute"); 
	var muteText = "Mute";
    var unmuteText = "Unmute";
    var isMuted = false;
	mute.addEventListener("click", function() {
		isMuted = !isMuted;
        video.muted = isMuted;
        muteButton.textContent = isMuted ? unmuteText : muteText;
    }); 

	var slider = document.getElementById("slider");
    var volumeDisplay = document.getElementById("volume-display");
    slider.addEventListener("input", function() {
        var volume = parseFloat(slider.value);
        video.volume = volume;
        var volumePercentage = (volume * 100).toFixed(0) + "%";
        volumeDisplay.textContent = volumePercentage;
    });

	document.getElementById("orig").addEventListener("click", function () {
		document.getElementById("player1").classList.remove("oldSchool");
	});

	document.getElementById("vintage").addEventListener("click", function () {
		document.getElementById("player1").classList.add("oldSchool");
	});


});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

