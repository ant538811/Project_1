var config = {
    apiKey: "AIzaSyB-UI9qoMgsE9H1YHvwhh7UJ_kIasWWYxI",
    authDomain: "project1-53cb3.firebaseapp.com",
    databaseURL: "https://project1-53cb3.firebaseio.com",
    projectId: "project1-53cb3",
    storageBucket: "",
    messagingSenderId: "1045216757135"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var input = "";

//clicking on button passes input to searchInput function
$("#submitButton").on("click", function()
{
	input = $("#userInput").val().trim();
	searchInput(input);
});

//click character icon passes input to searchInput
$("#hero-icon").on("click", function()
{
	input = $("#hero-icon").val();
	searchInput(input); //modify so that passing input actually takes you to page 3 with passed input
});
//trending clicked passes input field to userInput

//search info
function searchInput(characterInput) 
{
	console.log(characterInput);
    database.ref().set({
	input: input
});
  window.location.href = "index2.html";
}


