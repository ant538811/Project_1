$(".submitButton").on("click", function()
{
	var input = $(".form-control").val().trim();
	searchInput(input);
});
//sets the search field into session storage
function searchInput(characterInput) 
{
	console.log(characterInput);
    sessionStorage.setItem("userInput", characterInput);
 if (sessionStorage.getItem("userInput") != "")
 	{
  		window.location.href = "results.html";
 	}
}