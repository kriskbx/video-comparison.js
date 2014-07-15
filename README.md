video-comparison.js
================


video-comparison.js is a JavaScript library that creates a slider between two HTML5 videos. You can show the differences between these two videos. It was actually made for Visual Effects and Video Games.

It integrates with [Synchronize.js](https://github.com/CallToPower/Synchronize.js) to sync this two videos but it also runs without jQuery.

### Integrate the Script and Styles in your head

	<script type="text/javascript" src="video-comparison.min.js"></script>
	<link rel="stylesheet" type="text/css" href=""video-comparison.min.css">

### HTML

	<div class="vcs_wrapper" data-loop="true">
		<video>
			<source src="video.webm" type="video/webm">
			<source src="video.ogv" type="video/ogg">
			<source src="video.mp4" type="video/mp4">
			<source src="video.3gp" type="video/3gp">
		</video>
		<video>
			<source src="video.webm" type="video/webm">
			<source src="video.ogv" type="video/ogg">
			<source src="video.mp4" type="video/mp4">
			<source src="video.3gp" type="video/3gp">
		</video>
	</div>

You can use as many HTML instances as you want on one page.

### Use Synchronize.js

Download `Synchronize.js` here: https://github.com/CallToPower/Synchronize.js

You also need jQuery for Synchronize.js:

	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="synchronize.js"></script>
	
### Options

There is only one option right now: set `data-loop` to false if you want the videos to run only once.