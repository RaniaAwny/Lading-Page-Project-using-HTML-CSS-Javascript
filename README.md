# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

The usage languages
HTML, CSS, ES6

# Landing Page Project

The reason of the Landing Page Project is to build navigation bar to rebuild the sections, and scroll down to the last thing I have reached and added class active to it. Navigation bar represents the sections.

In the main tag the HTML has Id Section1 and its attributes data-nav and the same goes with the rest of sections 2, 3, 4.

Adding the script tag to combine the Javascript file with the HTML file.

In the javascript I started with storing the active-link to the variable active link class and storing you-active-class to active section class and determine the variables globaly which are sections, navigation and fragment. We used variable sections code to select all the section, and we used the navigation variable to select the Id element for navbar__list, then I created empty fragment variable to prevent performance issues and prevent adding unnecessary elemets to he DOM.

Inorder to make number of links as the number of sections so i added all through loop over sections by using forEach loop and it takes call back function so i used the element parameter only. Then i created the list item Li,
- Create anchor tag a
- Adding attributes from data-nav list as 
     - id  
     - navbar__list.

After that I used the class Name to access the list of 
1. Classes
2. Href
3. Title
4. The smooth scrolling by using the 
   usage of the class which is 
      1. The type click
      2. Appling scrollIntoView in the 
     element section
because when I press on the link then it goes the related link. Then I added preventDefault to prevent any adding by default in the URL.

After creating the element a and put it inside fragment then I put fragment inside menu navigation.

After that adding the highlight through scrolling in the section by adding function called add highlight then loop over section to know the dimensions by using forEach method. In order to have top dimensions so that i used getBoundingClientRect method. Then I added sectionTitle to add access class to the section and to it's oppisite link. Inorder the sections to be appear in the top so I used if statment and added active class section by using the equality. Adding active class link and loop over links. Inaddition, i applied the navigation bar responsive and make it usable with
1. Modern desktop
2. Tablet
3. phone browsers
By make it horizontal with small screens. 


Resources
My favorite engine is [Mozilla developer] (https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/forEach)
My favorite engine is [w3schools](https://www.w3schools.com/)

##### The auther

Rania Awny