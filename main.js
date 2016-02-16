
//start all the functions on click ---- make all sorts of things animate!!!

$(document).click(function(){

	// alert("DANGER DANGER DANGER")


//css3 + animation

var interval = setInterval(function(){
    $("#container").toggleClass("scale")
  }, 1000)

  $("#container").click(function(event){
  	$(event.currentTarget).toggleClass("rectangle")

  	$("#container").removeClass("scale")

    clearInterval(interval)
  })

	$("#container").mouseenter(function(){
		$("#squareFive").animate({
			left: '90px',
		},
		1200);
	})

		$("#container").mouseenter(function(){
		$("#squareFour").animate({
			left: '90px',
		},
		1100);
	})

		$("#container").mouseenter(function(){
		$("#squareThree").animate({
			left: '90px',
		},
		900);
	})	

		$("#container").mouseenter(function(){
		$("#squareTwo").animate({
			left: '90px',
		},
		800);
	})		

		$("#container").mouseenter(function(){
		$("#squareOne").animate({
			left: '90px',
		},
		700);
	})		



//make p disappear
    $(".hideMe").click(function(){
        $(this).hide();
    });


//on click + alert example
	function utility () {
		alert("hello!");
	}

	$("#cliclAlert").on("click", utility);


//fadeOut on click
	$("#fade").click(function(){
		$("#fading").fadeOut(1000)
	})


//animation combo
    $("h3").click(function(){
        $("#external").animate({
        	left: '250px', 
        	opacity: .5
        }, 
        1000);
        $("#external").fadeOut(2000);
    });


//trollish animation
	$("h2").click(function(){
		alert("i clicked the h2")
	}).mouseenter(function(){
		$(this).animate({
		left: $(this).position().left + 500
	})
		// console.log("i am mousing in")
	}).mouseleave(function(){
		$(this).animate({
			left: $(this).position().left + 500
		})
	})
	



});





