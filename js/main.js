function askQuestions(){

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);



	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13){

		console.log('User is a teenager');

	}	else{

		console.log('User is a child');

	}


	if (firstName.toLowerCase() === "general" && lastName.toLowerCase() != "assembly"){

		console.log('Greet the General');

	}

}






//when the page is loaded you can go ahead with javascript ($(document).on('ready', function(){})
$(function () {

	$('img').on('click', askQuestions);


	//when the user clicks an h3
	$('h3').on('click', function() {


		//SlideToggle the next element
		$(this).next().slideToggle(500);

	})


})
