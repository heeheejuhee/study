// document.addEventListener("DOMContentLoaded",function(){
// 	var list = document.querySelectorAll('li');

// 	list[0].addEventListener('click',function(){
// 		console.log("I'm clicked by normal javascript");
// 	})
// })

$(document).ready(function(){

	var list = $('li');

	list.first().click(function(){
		// this.style.background = 'red'
		// this.style.border = '4px solid black'
		$(this).css({'background-color':'red', 'border':'4px solid black'});
		console.log()
	})

	var chain = $('.chain');
	// console.log($(chain));
	// console.log($(chain.children()));
	// console.log($(chain.children()[3]));
	// console.log($(chain.children()[3]).children());
	// console.log($(chain.children()[3]).children().children());
	// console.log($(chain.children()[3]).children().children()[4]);

	var active = $('.active');

	console.log(active.closest('.chain'));


});

// $(function(){
// 	var heading = document.querySelector('h1');
// 	console.log(heading);
// })
