const pageIndication = document.querySelector('.pageIndicator');
const pages = document.querySelectorAll('section');
const pageNumbers = document.querySelector('.numbers');

let previousPage = 0;
let currentPage = 0;

function updatePage() {
	pageNumbers.innerHTML = `${currentPage + 1}/${pages.length}`;
	const indicators = document.querySelectorAll('.pageIndicator__dot');
	indicators.forEach((dot, i) => {
		if (i === currentPage) {
			dot.classList.add('pageIndicator__dot--active');
		} else if (i === previousPage)
			dot.classList.remove('pageIndicator__dot--active');
	});
}

Array.from(pages).forEach(e => {
	let indicator = document.createElement('div');
	indicator.classList.add('pageIndicator__dot');
	e.addEventListener('click', () => {
		pages.forEach((page, i) => {
			if (i === currentPage) {
				page.scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
	pageIndication.appendChild(indicator);
});
updatePage();

window.addEventListener('wheel', e => {
	const delta = e.wheelDelta;
	if (delta < 0) {
		if (currentPage == pages.length - 1) return;
		previousPage = currentPage;
		currentPage++;
		pages.forEach((page, i) => {
			if (i === currentPage) {
				page.scrollIntoView({ behavior: 'smooth' });
			}
		});
	} else {
		if (currentPage == 0) return;
		previousPage = currentPage;
		currentPage--;
		pages.forEach((page, i) => {
			if (i === currentPage) {
				page.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}
	updatePage();
	console.log(previousPage);
});

console.log(pages);
