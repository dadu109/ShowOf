const menuTrigger = document.querySelector('.navigation');
const menuContent = document.querySelector('.navigation__content');
let isMenuOpen = false;

const menu = document.querySelector('.burger'),
	menuitem1 = document.querySelector('.burger__rect--top'),
	menuitem2 = document.querySelector('.burger__rect--mid'),
	menuitem3 = document.querySelector('.burger__rect--bot'),
	speed = 0.15;

//instantiate  timeline
const menuTimeline = new TimelineLite({ paused: true, reversed: true }); //pause default

//collapse menu
menuTimeline
	.to(menuitem1, speed, { top: '10px', ease: Power2.easeOut }, 'label--1')
	.to(menuitem3, speed, { top: '6px', ease: Power2.easeOut }, 'label--1')

	//rotate all items
	.to([menuitem1, menuitem2, menuitem3], speed, {
		rotation: -90,
		ease: Quint.easeOut
	})

	//expand menu
	.to(menuitem1, speed, { left: ' 0.5em', ease: Power2.easeOut }, 'label--2')
	.to(menuitem3, speed, { right: ' 0.5em', ease: Power2.easeOut }, 'label--2')
	.to(menuTrigger, speed * 2, {
		x: '-400px'
	})
	.to(menuContent, speed, { opacity: '1' });

function toogleTween(tween) {
	tween.reversed() ? tween.play() : tween.reverse();
}

const toggleMenu = e => {
	isMenuOpen = !isMenuOpen;
	// if(menuTimeline.active()){
	// 	e.preventDefault();
	// 	e.stopImmediatePropagation();
	// 	return false;
	// }
	toogleTween(menuTimeline);
	console.log(isMenuOpen);
};

menuTrigger.addEventListener('click', e => {
	toggleMenu(e);
});
