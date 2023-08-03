//Javascript to toggle navigation menu

function navigationToggle(id)
{
    document.getElementById(id).classList.toggle("show-style");
}

//Javascript to open/close the makeup menu

function makeupToggle(id)
{
    document.getElementById(id).classList.toggle("hidemenu");
}

//Javascript to open the Drop down menu on click on Choose a Menu button on smaller screens

function menulistToggle(id)
{
    document.getElementById(id).classList.toggle("show-dropdown");
}

//Javascript to show/hide the cart

function cartToggle(id)
{
    document.getElementById(id).classList.toggle("cart-show");
}