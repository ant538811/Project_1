//prints results to search results page;  testing how to retrieve session storage info as a variable
$(".results").html(sessionStorage.getItem("userInput"));
var testing = sessionStorage.getItem("userInput");
console.log(testing); 


//clicking on button passes input to searchInput
$("#submitButton").on("click", function()
{
  input = $("#userInput").val().trim();
  searchInput(input);
});


//sets the search field into session storage
function searchInput(characterInput) 
{
  console.log(characterInput);
    sessionStorage.setItem("userInput", input);
 if (sessionStorage.getItem("userInput") != "")
    {
      window.location.href = "index2.html";
    }
}


