input = sessionStorage.getItem("userInput");


//prints results to search results page;  testing how to retrieve session storage info as a variable
$("#charName").html(sessionStorage.getItem("userInput"));
var testing = sessionStorage.getItem("userInput");
console.log(testing);
console.log(sessionStorage.getItem("userInput")) ;
masterInfo(sessionStorage.getItem("userInput")) ;
displayMovieInfo(sessionStorage.getItem("userInput")) ;


//clicking on button passes input to searchInput
/*$(".submitButton").on("click", function()
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
      window.location.href = "results.html";
    }
} */


function masterInfo(input) 
{
    $.ajax(
      {
            url: 'https://gateway.marvel.com/v1/public/characters?ts=1&name=' + input + '&apikey=046422bf98da68473e31e80235145c51&hash=d93b19fe572c1e03da0e5278e649ad57',
            type: 'GET',
        })
        .done(function(response) 
        {
          console.log(response);
        $(".title").html(response.data.results[0].name);
        $(".comic-results-overview").html(response.data.results[0].description);
        var resultImage = response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension;
          console.log(resultImage);
          $(".comic-results-img").html('<img src =' + resultImage + ' ' +'width="300" height="250">');
      })
}

function displayMovieInfo(input) 
{
        var originalMovie = input;
        var movie = originalMovie;
        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=40e9cece";
        // Creates AJAX call for the specific movie button being clicked
        $.ajax(
        {
          url: queryURL,
          method: "GET"
        })
        .done(function(response) 
        {
          console.log(response);
         $('.comic-results-movies').append("<img id= poster src= "+ response.Poster +"/>");
       })
        for (var sequel = 2; sequel <= 3; sequel++)
        {
          movie = originalMovie + " " + sequel;
          var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=40e9cece";
          console.log(movie);
          $.ajax(
        {
          url: queryURL,
          method: "GET"
        })
        .done(function(response) 
        {
         if (response.Poster != null)
          {
            console.log(response);
         $('.comic-results-movies').append("<img id= poster src= "+ response.Poster +"/>");
          }
       })
        }
     }