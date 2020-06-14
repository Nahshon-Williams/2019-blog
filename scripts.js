function hideHeader() {
	document.body.getElementsByTagName('header')[0].style.opacity = '0.0';
} ;

function showHeader() {
	document.body.getElementsByTagName('header')[0].style.opacity = '1.0';
} ;

var fader;

function fadeHeader() {
	document.body.getElementsByTagName('header')[0].style.opacity = '0.4';
	fader = setTimeout(function(){hideHeader();}, 1500);
} ;

document.body.getElementsByTagName('header')[0].style.transition = "opacity 0.2s linear";

var scrollPosition = window.pageYOffset;
var scrollDirection = 'none';
var mousePosition;

document.onscroll = function(){
	var newPosition = window.pageYOffset;
//	console.log('scrollPosition is: ' + scrollPosition);
//	console.log('Position is: ' + newPosition);
	scrollcode: if (mousePosition === 'on header') {
		break scrollcode;
	} else if (newPosition === 0) {
		clearTimeout(fader);
		showHeader();
	} else if (newPosition > scrollPosition) {
		clearTimeout(fader);
		console.log('User has scrolled down.');
		scrollDirection = 'down';
		hideHeader();
	} else if (newPosition < scrollPosition) {
		console.log('User has scrolled up.');
		if (scrollDirection === 'up') {
			scrollPosition = newPosition;
			break scrollcode;
		} else {
			scrollDirection = 'up';
			fadeHeader();
		};
	};
	scrollPosition = newPosition;
//	console.log('scrollPosition is: ' + scrollPosition);
} ;

document.body.getElementsByTagName('header')[0].onmouseenter = function(){
	clearTimeout(fader);
	showHeader();
	mousePosition = 'on header';
//	console.log('mouse is ' + mousePosition);
} ;

document.body.getElementsByTagName('header')[0].onmouseleave = function(){
	mouseLeaveCode: if (scrollPosition === 0){
//		console.log('top of page');
		break mouseLeaveCode;
	} else {
		fadeHeader();
	};
	mousePosition = 'off header';
//	console.log('mouse is ' + mousePosition);
} ;