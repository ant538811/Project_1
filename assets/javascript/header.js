function searchIconClicked()
{
	var input = $(".form-control").val().trim();
	searchInput(input);
}
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