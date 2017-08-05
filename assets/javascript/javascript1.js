//clears session storage item userInput so that the input does not persist when returning to home
sessionStorage.removeItem('userInput');

//////Input Bar STARTS Here//////
//clicking on button passes input to searchInput
$("#submitButton").on("click", function()
{
	var input = $("#userInput").val().trim();
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
//////Input Bar ENDS Here//////
//////Trending Character Links STARTS here//////
//click character icon directs user to character page
$(".comic-fav").on("click", function()
{
	var input = $(this).text();
	console.log(input);
	sessionStorage.setItem("userInput", input);
	//searchInput(input); //modify so that passing input actually takes you to page 3 with passed input
						//do so by using the comic vine api like page 2
	window.location.href = "index3.html";
});
//////Trending Character Links ENDS here//////
//////flickr API char icons STARTS here//////


