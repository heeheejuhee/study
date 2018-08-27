document.addEventListener("DOMContentLoaded",function(){
	var btn = document.querySelector('.menu-btn');
	var menu = document.querySelector('.menu-container');
	
	btn.addEventListener('click',function(){
		if(this.className.includes('active')){
			this.className = this.className.replace(" active","");
			menu.style.display = "block";
		} else {
			this.className += " active"
			menu.style.display = "none";
		}
	})

})

