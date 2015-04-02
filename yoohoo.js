$( document ).ready(function() {
    var mySound = new buzz.sound( "yoohoo", {
    	formats: [ "mp3" ],
    	preload: true,
    	autoplay: false,
    	loop: false
	});


	$('#actionbutton').on('click', function (e) {

     	mySound.play();
		console.log("buzz");

	});
});