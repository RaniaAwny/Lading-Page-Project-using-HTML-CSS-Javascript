/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
const cssActiveLinkClass = 'active-link';
const cssActiveSectionClass = 'your-active-class';

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment(); // empty Document Fragment()
const navigation = document.getElementById('navbar__list');

   // loop over sections
sections.forEach((section) => {
   //create list item
let newLi = document.createElement('li');
   //create anchor tag
let link = document.createElement('a');
   //adding attributes from data-nav list
   //cont navigationId = navigation.getAttribute('id);
   //const navigationTitle = navigation.getAttribute('navbar__list');
const sectionId = section.getAttribute('id');
const sectionTitle = section.getAttribute('data-nav');
   //add class
link.classList.add('menu__link');
   //add href
link.href = `#${sectionId}`;
   //add title
link.innerText = sectionTitle;

link.addEventListener('click', (evt) => {
  evt.preventDefault();
  section.scrollIntoView({ behavior: 'smooth' });
});

  newLi.appendChild(link);
  fragment.appendChild(newLi);
});
navigation.appendChild(fragment);

window.addEventListener('scroll', addHighlight);
   // Scroll to section on link click
const links = document.querySelectorAll('#navbar__list li a');

function addHighlight() {
  //loop over section
sections.forEach((section) => {
  //top dimension to every section
const sectionTop = section.getBoundingClientRect().top;
const sectionTitle = section.getAttribute('data-nav');

section.classList.remove(cssActiveSectionClass);

if (sectionTop > -52 && sectionTop < 300) {
   //add active class section
section.classList.add(cssActiveSectionClass);

   //add active class link
   //loop over links
 links.forEach((link) => {
if (link.innerText === sectionTitle) {
     link.classList.add(cssActiveLinkClass);
} else {
     link.classList.remove(cssActiveLinkClass);
  }
   });
  }
   });
  }


