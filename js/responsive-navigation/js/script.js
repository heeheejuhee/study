var menu_btn = document.querySelector(".btn-mobile-menu")
var menu = document.querySelector(".main-navigation")
console.log(menu_btn);

menu_btn.addEventListener('click',function(){

	if(menu.className.includes('opened')){
		menu.className = "main-navigation";
	} else {
		menu.className += ' opened';
	}
	
})