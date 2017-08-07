//prints results to search results page;  testing how to retrieve session storage info as a variable
var testing = sessionStorage.getItem("userInput");
//console.log(testing);
searchResults(sessionStorage.getItem("userInput")); 


//clicking on button passes input to searchInput
$("#submitButton").on("click", function()
{
  input = $("#userInput").val().trim();
  searchInput(input);
});


//sets the search field into session storage
function searchInput(characterInput) 
{
    sessionStorage.setItem("userInput", input);
 if (sessionStorage.getItem("userInput") != "")
    {
      window.location.href = "index2.html";
    }
}
function searchResults(input) 
{
   $.ajax(
      {
            url: 'https://gateway.marvel.com/v1/public/characters?ts=1&name=' + input + '&apikey=046422bf98da68473e31e80235145c51&hash=d93b19fe572c1e03da0e5278e649ad57',
            type: 'GET',
        })
        .done(function(response) 
        {
          console.log(response);
          $(".results").html(response.data.results[0].name);
          $(".results2").html(response.data.results[0].description);
          var resultImage = response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension;
          console.log(resultImage);
          console.log(unfound);
          $(".results3").html('<img src =' + resultImage + '>');
      }) 
   /* $.ajax(
      {
            url: 'https://gateway.marvel.com/v1/public/characters?ts=1&name=' + input + '&apikey=046422bf98da68473e31e80235145c51&hash=d93b19fe572c1e03da0e5278e649ad57',
            type: 'GET',
        })
        .done(function(response) 
        {
    console.log(response);
    console.log(response.data.results[0].name);
    $(".results2").html(response.data.results[0].name);
      }) */
}


