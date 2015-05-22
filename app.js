$(function(){

var total = [];
 	
 	// Sum of the equation
 	
 	$("span").click(function(event) {

// click event set on all of the buttons


	var buttonPressed = $(event.target).text()
	if (buttonPressed === "C"){
		$("#screen").html("")
		total = [];
	} // action for the clear button


	if (buttonPressed !== "=" && buttonPressed !== "C" 
		&& buttonPressed !== String.fromCharCode(247)) {
		$("#screen").append(buttonPressed)
		total.push(buttonPressed)
	} // pushes the button pressed to the total array

	if (buttonPressed === String.fromCharCode(247)) {
		$("#screen").append(String.fromCharCode(247))
		total.push("/")
	} // replaces the divide symbol (Char 247) with the divide symbol

		// console.log(total);


		if (buttonPressed === "=") {

		total = total.join("") // joins array of strings together


		var symb = /[x+-\/]/
		// gives the RegEx for .match()

		var compare = total.match(symb)
		// matches RegEx symb and puts into first index

		total = total.split(symb)
		// split the string on regex

		// console.log(compare[0]);

		// if (compare[0] === null){
		// 	$("#screen").html("")
		// 	total = "";
		// }

		if (compare[0] === "+") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) + parseInt(total[1]))
		}
		if (compare[0] === "-") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) - parseInt(total[1]))
		}
		if (compare[0] === "x") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) * parseInt(total[1]))
		}
		if (compare[0] === "/") {
			$("#screen").html("")
			$("#screen").append(
				 parseInt(total[0]) / parseInt(total[1]))
		}

	}
	

	})
 })	




/////////////////////////////////////////////////////////////////////////////////////

// // First try......



// $(function() {
   
//    // alert("Ready for DOM manipulation!");

// 	var string1 = "";
// 	var string2 = "";

//    $("span").click(function(e) {
  
// 		var divide = "&divide;"
// 		var $input = $(this.innerHTML);
// 		var num = $input.selector;
		

// 		if (num === "C") {

// 			string1 = "";

// 		} else if (num === "x") {

// 			alert("multiply!");

// 			string2 = string1;
// 			string1 = "";
		
// 		} else if (num === "-") {

// 			alert("subtract!");

// 			string2 = string1;
// 			string1 = "";
		
// 		} else if (num === "+") {

// 			alert("add!");

// 			string2 = string1;
// 			string1 = "";

// 		} else

// 		string1 += num + "";
	
// 	$('#screen').empty().append(string1);


// 		// 	string1 += num + "";

// 		console.log(num);
// 		//console.log($screen);

// 		// console.log($("screen").innerHTML = string1);

//   //         var screenz = $("#screen")
//   //         screenz.innerHTML = string1;

// 		});
	

// // $("#screen").html('<div>string1</div>');


// //$('#screen').empty().append(5000);



// 	});

