
//jQuery Selector

//ex1:  hide all <p> elements
$("p").hide();
//ex2: hide an element with id="test"
$("#text").hide();
//ex3: hide all elements with class="test"
$(".text").hide();
//ex4: hide all elements in the document
$("*").hide();
//ex5: hide all elements with an href attribute
$("[href]").hide();
//ex6: hide all odd table rows in a table
$("tr:odd").hide();

//jQuery Events

//ex1: hide all <p> elements with a "click"
$("p").click(function(){
    $(this).hide();
  });
//ex2: hide all <p> elements with a "double-click"
$("p").dblclick(function(){
    $(this).hide();
  });
//ex3: When the mouse pointer enters a <p> element, it should be hidden
$("p").mouseenter(function(){
    $(this).hide();
  });
//ex4: If you press a keyboard key inside an <input> element, it should be hidden
$("input").keypress(function(){
    $(this).hide();
  });
//ex5: on() method to attach a click event handler to all <p> elements
$("p").on("click", function(){
    $(this).hide();
  });

//jQuery Hide and Show

//ex1: jQuery method to hide a <p> element when it is clicked on
$("p").click(function(){
    $(this).hide();
  });
//ex2: jQuery method to hide a <p> element when it is clicked on
$("p").click(function(){
    $(this).hide("slow");
  });
//ex3: jQuery method to show a <p> element
$("button").click(function(){
    $("p").show();
  });
//ex4: jQuery method to toggle between hiding and showing a <p> element
$("button").click(function(){
    $("p").toggle();
  });

//jQuery Fade

//ex1: jQuery method to fade out a <div> element
$("div").fadeOut();
//ex2: jQuery method to fade out a <div> element (slow)
$("div").fadeOut("slow");
//ex3: Use a jQuery method to fade a <div> element to an opacity of "0.2"
$("div").fadeTo("slow", 0.2);
//ex4: jQuery method to toggle between fading in and out a <div> element, when clicking on a button
$("button").click(function(){
    $("div").fadeToggle(1000);
  });

//jQuery Slide

//ex1: jQuery method to slide up a <div> element
$("div").slideUp();
//ex2: jQuery method to slide up a <div> element
$("div").slideUp("slow");
//ex3: jQuery method to slide down a <div> element
$("div").slideDown();
//ex4: jQuery method to toggle between sliding up and down a <div> element, when clicking on a button
$("button").click(function(){
    $("div").slideToggle();
  });

//jQuery Animate
//ex1: animate() method to move a <div> element 250 pixels to the right
$("div").animate({left: '250px'});
//ex2: animate() method to set the height of a <div> element to 500 pixels
$("div").animate({height: '500px'});
//ex3: animate() method to set the following CSS properties for <div>:
//opacity: 0.4, height: 500px, width: 500px.
$("div").animate({
    opacity: '0.4',
    height: '500px',
    width: '500px'
  });
//ex4: animate() method to set the font-size of a <div> element to 100 pixels
$("div").animate({fontSize: '100px'}, "slow");

//jQuery Stop

//ex1: jQuery method to stop the animation effect of a <div> element
$("div").stop();

//jQuery Get

//ex1:  jQuery method to return the text content of a <div> element
$("div").text();
//ex2: jQuery method to return the HTML content of a <div> element
$("div").html();
//ex3:  jQuery method to return the value of an input field
$("input").val();
//ex4: jQuery method to return the URL address of a link
$("a").attr("href");

//jQuery Set

//ex1: jQuery method to change the text of a <div> element to "Hello World"
$("div").text("Hello World");
//ex2: jQuery method to change the value of an input field to "John Doe"
$("input").val("John Doe");
//ex3: jQuery method to change the value of an image's src attribute to "myimage.jpg"
$("img").attr("src", "myimage.jpg");
//ex4: jQuery to change the text of a link to "Demo" | change the value of href's attribute value to "www.demo.com"
$("#myLink").text("Demo");
$("#myLink").attr("href", "https://www.demo.com");

//jQuery Add

//ex1: jQuery method to insert the text "YES!" at the end of a <p> element
$("p").append("YES!");
//ex2: jQuery method to insert the text "YES!" at the beginning of a <p> element
$("p").prepend("YES!");

//jQuery Remove

//ex1: jQuery method to remove a <div> element
$("div").remove();
//ex2: jQuery method to only remove the child elements of a <div> element
$("div").empty();
//ex3: https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_dom_remove3
$("div").remove(".test, .demo");

//jQuery CSS Classes

//ex1: jQuery method to add the "important" class to a <p> element
$("p").addClass("important");
//ex2: jQuery method to add both the "important" and "test" class to a <p> element
$("p").addClass("important test");
//ex3: jQuery method to remove the "important" class from a <p> element
$("p").removeClass("important");
//ex4: jQuery method to toggle between adding and removing the "important" class from the <p> element on click
$("p").click(function(){
    $(this).toggleClass("important");
  });

//jQuery Traversing

//ex1: jQuery method to get the direct parent of a <span> element
$("span").parent();
//ex2: jQuery method to get all ancestors of a <span> element
$("span").parents();
//ex3: jQuery method to get all direct children of a <div> element
$("div").children();
//ex4: jQuery method to get all <span> elements that are descendants of <div>
$("div").find("span");
//ex5: jQuery method to get all siblings elements of an <h2> element
$("h2").siblings();
//ex6: jQuery method to get the first <div> element in the document
$("div").first();