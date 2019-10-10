
console.log("hello")



$("body h5").css("color","red");
$("div#abc h5").css("color","teal");
$("div#abc h5").siblings().css("color","green");
$("div#abc div#abc123 h5").css("color","orange");
$("div#abc div#abc123 div#xyz h5").css("color","blue");

$(".heading5").css("color","purple");


//$("div#mylist ul.mylistitems li:first").css("color","blue");
//$("div#mylist ul.mylistitems li:last").css("color","red");

//$("div#mylist ul.mylistitems li:odd").css("color","red");
//$("div#mylist ul.mylistitems li:even").css("color","red");

//$("div#mylist ul.mylistitems li:eq(2)").css("color","red");
//$("div#mylist ul.mylistitems li:gt(1)").css("color","red");
//$("div#mylist ul.mylistitems li:lt(1)").css("color","red");
// Note: nth-child(x) is 1 based, while others are zero based
//$("div#mylist ul.mylistitems li:nth-child(3)").css("color","red");


//$("input[name=first]").val("Darrell")
//$("input[name=email]").val("type email here")

// Does not equal
//$("input[name!=email]").val("Darrell")

// Begins with
//$("input[name^=e]").val("myemail@example.com")

// ends with
//$("input[name$=mail]").val("myemail@example.com")

// contains
//$("input[name*=mai]").val("myemail@example.com")

//$(".table tbody tr:first-child td:first-child").css("color","green");
//$(".table tbody tr td:first-child").css("color","green");

//$("input[name=firstName]").css("color","green");

//$("div#myeventdiv > button#mybutton2").css("visibility","visible");
$("div#myeventdiv > button#mybutton2").css("visibility","hidden");





$(document).ready(function() {
    console.log("document.ready event fired");

//    $("div#myeventdiv > button#mybutton1").mouseover(function() { handleMouseOverEvent(); });
//    $("div#myeventdiv > button#mybutton1").click(function() { handleClickEventButton1(); });
//    $("div#myeventdiv > button#mybutton1").focus(function() { handleFocusEvent(); });

//    $("#full-name").focus(function() { focusEventHandler(); });
//    $("#full-name").blur(function()  { blurEventHandler();  });


    var list = $('#funWithLists > ul');
    list.append("<li>cats</>");

    $("#funWithLists > #buttonGetImages").click(function() { addImagesToList(); });

    $("#run-code").click(function() { runCode(); });


    var links = $("#search-engines > li > a");
 //   var mylink = $("#search-engines > li > a");
 //   var mylink = $("#search-engines > li:eq(0) > a").text();

//    console.log("mylink = '" + mylink + "'");

    $.each(links, function (key, value) {
        var link = $("#search-engines > li:eq(" + key + ") > a");
        var mystring = $("#search-engines > li:eq(" + key + ") > a").text();
        var mylink = "https://www." + mystring.toLowerCase().replace(/\s/g,'') + ".com";
        mylink = mylink.replace(".com.com",".com");

        link.attr("href", mylink);

//        console.log(mystring + " => '" + mylink);

    })


//    $(".square").fadeToggle();
//    $(".circle").fadeToggle();
    
//    $(".square, .circle").fadeTo("slow", 0.5)
//    $(".square, .circle,").fadeTo("slow", 1)
    
//    setInterval(function(){ $(".square").fadeToggle(); }, 5000);
 

getData2()



});    





//   <h3 id="flight-number"></h3> 
//   <h3 id="rocket-name"></h3>
//   <h3 id="success-status"></h3> 
 

function getData() {

    $.ajax({
        type: 'GET',
        url: 'https://api.spacexdata.com/v2/launches/latest',
        success: function(data) {
            var flightNumber = data.flight_number;
            var rocketName = data.rocket.rocket_name;
            var successStatus = data.launch_success;

            $('#flight-number').html("Flight number:" + flightNumber).fadeIn("slow")
            $('#rocket-name').html("Rocket name:" + rocketName).fadeIn("slow")
            $('#success-status').html("Success status:" + successStatus).fadeIn("slow")

            console.log(flightNumber);
            console.log(rocketName);
            console.log(successStatus);
        },
        error: function(err) {
            console.log(err);
        },
        dataType: 'json'
    })

}

function getData2() {


    $.getJSON('https://api.spacexdata.com/v2/launches/latest',
        function(data) {
            var flightNumber = data.flight_number;
            var rocketName = data.rocket.rocket_name;
            var successStatus = data.launch_success;

            $('#flight-number').html("Flight number:" + flightNumber).fadeIn("slow")
            $('#rocket-name').html("Rocket name:" + rocketName).fadeIn("slow")
            $('#success-status').html("Success status:" + successStatus).fadeIn("slow")

            console.log(flightNumber);
            console.log(rocketName);
            console.log(successStatus);
        }
    )

}


// Create your addGroceryItem function here

function addGroceryItem() {

    newGroceryItem = $("#new-grocery-item").val();
    $('#grocery-list').append(newGroceryItem);

}

// This function will bind the "on click" event of your button
function exampleClickHandler() {
    $('#add-grocery-item').click(function () {addGroceryItem() });
}


function runCode() {
    var markup = $("#code-editor").val();
    console.log(markup)
    var myhtml = $("#output").text;
    $("#output").text("abcdef");
    console.log(myhtml)
    //    $("#output").html = markup;    
}



function addImagesToList() {

    $("#funWithLists > ul > li").each(function (index,item) {
        var content = $(item).html();
        var listItem = $("#funWithLists > ul > li:eq(" + index + ")");
        var newImageElement = "<img src=\"http://lorempixel.com/100/50/" + content + "\" >";
        listItem.after(newImageElement);
        console.log(index + ": " + content + ": " + newImageElement);
    });
}

function handleClickEventButton1() {
    console.log("Button1 - click Event fired")

    $("div#myeventdiv > button#mybutton2").click(function() { handleClickEventButton2(); });
    $("div#myeventdiv > button#mybutton2").css("visibility","visible");
}

function handleClickEventButton2() {
    console.log("Button2 - click Event fired")
    $("div#myeventdiv > button#mybutton2").css("visibility","hidden");
}


function handleMouseOverEvent() {
    console.log("mouseOver Event fired")

}

function handleFocusEvent() {
    console.log("focus Event fired")

}


function focusEventHandler() {
    console.log("Input has focus");
}

function blurEventHandler() {
    console.log("Input lost focus");
}


