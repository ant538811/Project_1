//initializing the firebase
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

//retrieving firebase info
  database.ref().on("value", function(snapshot) 
  {
      console.log(snapshot.val());
  });
  
//clicking on button passes input to searchInput
$("#submitButton").on("click", function()
{
  input = $("#userInput").val().trim();
  searchInput(input);
});

//trending clicked passes input field to userInput

//search info
function searchInput(characterInput) 
{
  console.log(characterInput);
  database.ref().set({
  input: input
});
    
}


