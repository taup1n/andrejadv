// game.js
$.wait = function( callback, seconds){
   return window.setTimeout( callback, seconds * 1000 );
}

function intro() {
	$("#andrej").html("you find yourself on bluejeans with a cold-faced croatian killer.<br>a lump in your throat forms as he begins to speak.");
	$("#andrej").modemizr();
	$.wait( function(){ greeting_andrej() }, 7);
}

function buddy() {
	var ary = Array(
		"buddy",
		"friend");
	return ary[Math.floor(Math.random()*ary.length)];
}

function shit() {
	var ary = Array(
		"this shit",
		"the shit",
		"these shits",
		"this shits");
	return ary[Math.floor(Math.random()*ary.length)]; 
}

function greeting_andrej() {
	var ary = Array(
		"good to see you, " + buddy() + "!",
		"what's up, " + buddy() + "?",
		"hey " + buddy() + "!");
	var phrase = ary[Math.floor(Math.random()*ary.length)];
	say_andrej(phrase);
	$.wait( function(){ howmuch_andrej() }, phrase.length * .1 + 1);
}

function howmuch_andrej() {
	var ary = Array(
		"how much are you charging for " + shit() + "?",
		"how much for " + shit() + "?",
		"how much " + shit() + " cost?",
		"how expensive " + shit() + "?",
		"how much " + shit() + "?",
		"tell me price " + shit() + "?",
		"tell me how expensive " + shit() + "?");
	var phrase = ary[Math.floor(Math.random()*ary.length)];
	say_andrej(phrase);
	$.wait( function(){ show_input() }, phrase.length * .1 + 1);
}

function no_andrej(quote) {
	$.wait( function(){ clear_aws() }, .001);
	if ($.isNumeric( quote )) {
		var ary = Array(
			"fuck you.  i am not paying that much for " + shit() + ".",
			"no way i pay that much for " + shit() + ".",
			"are you kidding me with " + shit() + "?",
			"why are you kidding me with " + shit() + "?",
			"are you joking me with " + shit() + "?",
			"why are you joking me with " + shit() + "?",
			"are you fucking kidding me?",
			"i cannot believe " + shit() + ".",
			"stop trying to fuck me on " + shit() + ".",
			"stop trying to fuck me with " + shit() + ".",
			"i have new airsoft just for you " + buddy() + "."
			);
		var phrase = ary[Math.floor(Math.random()*ary.length)];
		say_andrej(phrase);
		$.wait( function(){ howmuch_andrej() }, phrase.length * .1 + 1);
	} else {
		var ary = Array(
			"that is not even a number.",
			"stop playing with me.",
			"you waste my time.",
			"don't speak nonsense.",
			"say number, dumbass."
			);
		var phrase = ary[Math.floor(Math.random()*ary.length)];
		say_andrej(phrase);
		$.wait( function(){ howmuch_andrej() }, phrase.length * .1 + 1);
	}
}

function clear_aws() {
	$("#aws").html("");
}

function show_input() {
	$("#aws").html("please enter a dollar amount to quote andrej: <br>$<input type=\"text\" id=\"response\" size=\"10\" onkeydown=\"check_input(event)\">");
}

function check_input(e){
	if(e.keyCode === 13){
		e.preventDefault();
		var quote = $("#response").val();
		no_andrej(quote);
	}
}

function set_talking() {
	$("#andrej-talk").show();
	$("#andrej-blink").hide();
}

function set_blinking() {
	$("#andrej-talk").hide();
	$("#andrej-blink").show();
}

function say_andrej(phrase) {
	set_talking();
	$("#andrej").html(phrase);
	$("#andrej").modemizr();
	$.wait( function(){ set_blinking() }, phrase.length * .1);
}