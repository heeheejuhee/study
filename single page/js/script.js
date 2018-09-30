document.addEventListener('DOMContentLoaded',function(){
	var mobilebtn = document.querySelector('.mobile-btn');
	mobilebtn.addEventListener('click',function(){
		var nav = document.querySelector('.navigation');
		nav.classList.toggle('active')
	})

	//Move Carousel

	var btns = document.querySelectorAll('.carousel-btn');
	// var rbtn = document.querySelector('.btn-right');
	var carousel = document.querySelector('.carousel');
	var slide = document.querySelectorAll('.slide');

	for(var i = 0; i< btns.length; i++){
		if(this.className.contains('.btn-right')){
			carousel.style.left = -500 + "px";
		} else{
			carousel.style.right = 500 + "px";
		}

	}

	// for(var i = 0; i< btns.length; i++){

	// 	btns[i].addEventListener('click',function(){
	// 		var movement = 500;
	// 		var currentIndex = (carousel.getAttribute('data-index') == null)? 1 : slides.getAttribute('data-index');

	// 		if(this.className.includes('btn-right')){
	// 		 	if(currentIndex != slide.length){
	// 			 	carousel.style.left = -(movement * currentIndex) + "px";
	// 			 	carousel.setAttribute('data-index', parseInt(currentIndex) + 1)
	// 		 	}
	// 		 } else {
	// 		 	if(currentIndex != 1 ){
	// 				carousel.style.left = (parseInt(carousel.style.left) + movement) + "px";
	// 			 	carousel.setAttribute('data-index', parseInt(currentIndex) - 1)	
	// 		 	}			 			
	// 		 }


	// 	})
	// }


})

