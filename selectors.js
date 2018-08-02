// Select all divs and give them a purple background
$("div").css("background", "purple");

// Select the divs with the class "highlight" and give them 200pw wide
$(".highlight").css("width", "200px");

// Select the div with id "third" and give it an orange border
$("#third").css("border", "1px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div").first().css("color", "pink");
// ... Alternatively, using CSS built-in ":first-of-type"
$("div:first-of-type").css("color", "pink");
// ... Alternatively still, by using jQuery shortcut ":first"
$("div:first").css("color", "pink");

// Ofcourse it's always possible to assign variables using the jQuery $ selector methods
// And then change the properties you want
var firstDiv = $("div:first-of-type");
firstDiv.css("color", "pink");