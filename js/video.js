var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector('#player1');
	video.autoplay = false; 
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
}); 

document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause Video")
	video.pause()
});


let playbackRate = 1
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Fast Video")
	video.playbackRate *= 1.10
	console.log("New speed is set to" + video.playbackRate + "%")
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Video")
	video.playbackRate *= .9
	console.log("New speed is set to" + video.playbackRate + "%")
});


let skipButton = document.querySelector("#skip");
skipButton.addEventListener("click", skipVideo);
function skipVideo(){
	video.currentTime += 10;
	console.log(video.currentTime)

	if (video.currentTime == video.duration){
		video.play()
	}
}

document.querySelector("#mute").addEventListener("click", function(){
	video.muted = true;
	console.log("Video is muted: " + video.muted)
	if (video.muted = true){
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	
})

let volumeLevel = document.querySelector("#slider");
volumeLevel.addEventListener("input", changeVolume);

function changeVolume(event){
    let video = document.querySelector("video");
    let normalizedVolume = event.target.value / 100; 
    video.volume = normalizedVolume;
    console.log((video.volume) * 100 + "%"); 
}


let oldStyleButton = document.querySelector("#vintage");
oldStyleButton.addEventListener("click", changeToOldSchool);

function changeToOldSchool() {
    document.querySelector("video").setAttribute('class', 'oldSchool');
}

let newStyleButton = document.querySelector("#orig");
newStyleButton.addEventListener("click", changeToNew);

function changeToNew() {
    document.querySelector("video").removeAttribute('class');
}
