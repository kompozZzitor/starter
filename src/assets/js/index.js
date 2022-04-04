import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

global.gsap = gsap;

gsap.defaults({
	overwrite: 'auto',
});

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			Signal: require('./classes/Signal').default,
		};
		this.components = {};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.accept();
}
if (window.innerWidth < 991) {
	const busket = document.querySelector('.header-right-items__cart');
	const busketBlock = document.querySelector('.basket');

	busket.addEventListener('click', () => {
		busketBlock.classList.toggle('show');
	});
}

if (window.innerWidth < 1025) {
	const menuBtn = document.querySelector('.header-right-items__menu');
	const menuBlock = document.querySelector('.menu');
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('close');
		menuBlock.classList.toggle('show');
	});
}

document.addEventListener('DOMContentLoaded', function () {
	const plusBtn = document.querySelectorAll('.product-buttons__plus');
	plusBtn.forEach(btn => {
		btn.addEventListener('click', e => {
			const productBlock = e.path[2].children[3].children[1];
			const productStartSum = parseInt(e.path[2].children[3].children[1].dataset.sum, 10);
			const productSum = parseInt(e.path[2].children[3].children[1].textContent, 10);
			productBlock.innerHTML = productSum + productStartSum;
			e.path[2].children[1].textContent++;
		});
	});

	const minusBtn = document.querySelectorAll('.product-buttons__minus');
	minusBtn.forEach(btn => {
		btn.addEventListener('click', e => {
			if (e.path[2].children[1].textContent > '1') {
				const productBlock = e.path[2].children[3].children[1];
				const productStartSum = parseInt(e.path[2].children[3].children[1].dataset.sum, 10);
				const productSum = parseInt(e.path[2].children[3].children[1].textContent, 10);
				productBlock.innerHTML = productSum - productStartSum;
				e.path[2].children[1].textContent--;
			}
		});
	});

	const removeBtn = document.querySelectorAll('.product-card__close');
	removeBtn.forEach(btn => {
		btn.addEventListener('click', e => {
			e.path[2].remove();
		});
	});
});
