document.addEventListener('DOMContentLoaded',function(){
	var mobilebtn = document.querySelector('.mobile-btn');
	mobilebtn.addEventListener('click',function(){
		var nav = document.querySelector('.navigation');
		nav.classList.toggle('active')
	})

	//Move Carousel

	var carouselBtn = document.querySelectorAll('.carousel-btn');
	var carousel = document.querySelector('.carousel');
	var slide = document.querySelectorAll('.slide');
	var currentIndex = 0;

	for(var i = 0; i< carouselBtn.length; i++){

		carouselBtn[i].addEventListener('click',function(){
			var movement = slide[0].offsetWidth;
			
			if(this.classList.contains('btn-right')){
				if(currentIndex < slide.length-1){
					currentIndex++;
					carousel.style.left = -movement * currentIndex + "px";
				}
			} else {
				if(currentIndex != 0) {
					currentIndex--;
					carousel.style.left = -movement * currentIndex + "px";
				}
			}
		})
	}


	//Thumbnail

	window.addEventListener('resize',function(){
		resizeThumbnail();
	})
	resizeThumbnail();

	function resizeThumbnail(){
		var thumbnail = document.querySelectorAll('.thumbnail');

		for(var i = 0; i < thumbnail.length; i++){
			thumbnail[i].style.height = thumbnail[i].offsetWidth + "px";
		};
	}


	// // Skill-set

	// var skills = document.querySelectorAll('.skill');
	// for(var i = 0; i < skills.length; i++){
	// 	var skill = skills[i];

	// 	skill.addEventListener('mouseover',function(){
	// 		var percentage = this.getAttribute('data-percentage');
	// 		var after = window.getComputedStyle(this,':after').getPropertyValue('width');
	// 		console.log(after);
	// 	})

	// }
})

