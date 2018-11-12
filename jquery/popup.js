$(function(){

	var closeBtn = $('.close-btn');

	closeBtn.click(function(e){
		e.preventDefault();
		
		var popup = $(this).closest('.popup');
		popup.hide();
	});


	// Pure Javascript Coding 
	
	// var closeBtn = document.querySelectorAll('.close-btn');
	// for(var i =0 ; i < closeBtn.length ; i++){
	// 	closeBtn[i].addEventListener('click',function(e){
	// 		e.preventDefault();

	// 		var popup = findAncestor(this,'popup');
	// 		popup.style.display='none';
	// 	})
	// }
})


// function findAncestor (el, cls) {
//     while ((el = el.parentElement) && !el.classList.contains(cls));
//     return el;
// }

