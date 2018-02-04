	var cardElement = $("#single-result");
	var cardElementMany = $("#many-result");

(function() {
	var cardElement = $("#single-result");
	var cardElementMany = $("#many-result");

	cardElement.show();
	cardElementMany.show();
	console.log("showing");
	}
());

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAxGWYJHmmoEm-dnFjPIShtX9cTqsKVteA",
  //   authDomain: "verygen-88167.firebaseapp.com",
  //   databaseURL: "https://verygen-88167.firebaseio.com",
  //   projectId: "verygen-88167",
  //   storageBucket: "",
  //   messagingSenderId: "227419604197"
  // };
  // firebase.initializeApp(config);

function fetchData() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://verygen-88167.firebaseio.com/.json", false);
	request.send(null);

	var status = request.status;

	if (status == 200) {
		console.log("JSON was found");
	} else if (status >= 400) {
		console.log("JSON was not found");
	} else {
		console.log("The status is" + status);
	}
		var jsonData = request.responseText;
		var jsonParsed = JSON.parse(jsonData);

		cardElement.show(function() {
		$('#single-result-text').replaceWith(jsonParsed.classes.val0.text[4]);
		$(this).css("font-size", "50px");
	})
		
<<<<<<< HEAD
}
function selectorInput() {
	var selectorId = document.getElementById("#select-compon");
	




}
=======
}
function selectorInput() {
	var selectorId = document.getElementById("#select-compon");
	




}
>>>>>>> ed532f186f2c33e8f2590b3f8cad4f0425441f8b





    $('#button-one-name').click(function(){
       fetchData();
    });




<<<<<<< HEAD
=======



>>>>>>> ed532f186f2c33e8f2590b3f8cad4f0425441f8b
