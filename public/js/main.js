/* Helper Functions */
const stripHtml = (arg) => arg.replace(/<(?:.|\n)*?>/gm, '');

/* Menu Functionality */

// Select Menu Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

/* Video list Functionality */

// Register click event with all video item
if (document.querySelector('.video-list')) {
	const items = document.querySelectorAll('.list-item-link');
	
	items.forEach(item => {		
		item.addEventListener('click', () => {			
			const ytPlayer = document.querySelector('.yt-player');
			ytPlayer.src = `https://www.youtube.com/embed/${item.getAttribute('data-ytitem')}`;
		});
	});
}

/* Services Functionality */

// Capture the content element's innerHTML
let contentInnerHtml;

if (getElement('services')) {
	contentInnerHtml = getElement('content').innerHTML;
	getElement('drconverterModal').style.display = 'none';
	getElement('distanceCalculatorModal').style.display = 'none';
	getElement('mychartDataModal').style.display = 'none';
}

/* Close Button Functionality */

// Get all close buttons
const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach(btn => {
	addHandler(btn, 'click', () => {
		btn.parentElement.classList.add('fade-out');
		let timer = setTimeout(() => {
			removeElement(document.body, btn.parentElement);
			clearTimeout(timer);
		}, 500);
	});
});