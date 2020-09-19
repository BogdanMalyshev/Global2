

const burgerMenu = document.querySelector('.burger__menu'),
	  main = document.querySelector('.main');

burgerMenu.addEventListener('click', function (){
	main.classList.toggle('active');
	burgerMenu.classList.toggle('active');
});
// animate-----------------------------------------

let animItems = document.querySelectorAll('.anim_items');

 if (animItems.length > 0) {
 	window.addEventListener('scroll', animScrollOn);
 	function animScrollOn() {
 		animItems.forEach(e => {
 			const animItemsHeight = e.offsetHeight,
 				  animItemsOffset = offset(e).top,
 				  offsetHeight = document.documentElement.clientHeight;


 			if (pageYOffset + offsetHeight - (animItemsHeight / 4) >= animItemsOffset && pageYOffset < (animItemsOffset + animItemsHeight)) {
 				e.classList.add('active');
 			} else {
 				 e.classList.remove('active');
 			}
 		});
 	}

 	function offset (el) {
 		const coordinates = el.getBoundingClientRect(),
 			  scrollTop = window.pageXOffset || document.documentElement.scrollTop,
 			  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

 		return {top: coordinates.top + scrollTop, left: coordinates.left + scrollLeft};
 	}


 	setTimeout(()=>animScrollOn(), 500);
 }
