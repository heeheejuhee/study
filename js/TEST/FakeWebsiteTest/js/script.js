document.addEventListener("DOMContentLoaded",function(){
			var btn = document.querySelector('.menu-btn');
			var menu = document.querySelector('.menu-container');
			
			btn.addEventListener('click',function(){
				if(this.className.includes('active')){
					this.className = this.className.replace(" active","");
				} else {
					this.className += " active"
				}
			btn.addEventListener('click',function(){
				if(this.className = ('.menu-btn')){
					menu.style.display = "none";
				} else {
					menu.style.display = "block";
				}
			})
		})

