// Create a nav bar and change the colour of its first element to red.
document.getElementsByClassName("nav-item")[0].firstElementChild.style.color = "red" 

// cretae an element with three children. now the change the color of first and last element to given.
document.getElementsByClassName("nav-item")[0].firstElementChild.style.color = "green"
document.getElementsByClassName("navbar-nav")[0].lastElementChild.style.color = "green"

// Write a javascript code to change background of all <li> tags to red.
Array.from(document.getElementsByTagName("li")).forEach((Element) =>{
    Element.style.background = "red"
})