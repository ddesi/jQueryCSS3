// ----------------------------- jQuery and libraries
// created by others you can pull it in and use it on your website
// you have access to all the effects and objects etc


// ----------------------------- compatibilities problems
// find a website that emulates how your website looks on different browsers
// like IE6, 7, 8

// jQuery captures the ready event
// tells u that every element is loaded on the page
// so you can put jQuery in the <head>


// $ means get me that element
// so e.g. get me the p element and on click hide that element

// you are always going to get back an array


// it reads a lot like CSS so you can select ids and classes etc


// ----------------------------- you can view all of the functions available in the library at
// ----------------------------- api.jquery.com


// you can build jQuery plug ins they add functionality to behaviors that already exist in the library


// ----------------------------- you can capture certain events that happen on the page
// eg the document ready event:
// $(document).ready
// you can pass a function inside a function


// ----------------------------- anonymous functions
// functions that don’t have a name
// bc u can create behavior that u only use once
// so only a callback for an event that happens once
// you can also pass them around
// so an argument that accepts another function
// so adding behavior to that function that u created
// and then u can run it

// function(){
// alert(“i am anonymous”);
// }
// you can store it in a variable
// var myAnonymousFunction = function(){ alert(“i am anonymous”); }

// someRunner(someOtherFunction


// i can name a function outside
// then call it inside the document ready

// function utility(){
// alert(“something happened”);
// }

// $(document).ready(function(){
// $(“a”).on(“click”, utility)
// });


// super cool library
// jQuery UI has more special effects!!!

// ----------------------------- animate
// http://www.w3schools.com/jquery/jquery_animate.asp


// ----------------------------- JQUERY DOM MANIPULATION
// in the console

// if i wanna get what the element is
// $(“h1”)
// it will return the html and the text as well


// if i wanna get the text of that element
// $(“h1”).text()
// it will return what the text is


// you change it by writing in the () after text
// $(“h1”).text(“NOPE”)


// i can also change the style 
// $(“h1”).text(“<em>now it’s em</em>”)


// it s a way to target validation in the forms


// to get the first or last h1 in an array of h1s

// $(“h1”).first()
// $(“h1”).last()


// or use the usual if you have more :)
// $(“h1”)[1]


// example for sublime
// $("h2").last().text("hello")


// you don’t need the document.ready if you are dealing with onclick etc


