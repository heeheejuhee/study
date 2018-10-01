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

	var thumbnail = document.querySelectorAll('.thumbnail');
	console.log(thumbnail);
	for(var i = 0; i < thumbnail.length; i++){
		console.log(thumbnail[i].offsetWidth)
		thumbnail[i].style.height = thumbnail[i].offsetWidth + "px";
	};

})

