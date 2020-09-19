var searchButton = document.getElementById("primary-search-button");
var feelingLuckyButton = document.getElementById("feeling-lucky-button");

// Event Listeners
searchButton.addEventListener('click', function(event){
    event.preventDefault();
    runSearch();
});
feelingLuckyButton.addEventListener('click', function(event){
    event.preventDefault();
    runSearch();
});

// Search Functionality
function runSearch(){
    var searchInput = document.getElementById("search-input");
    var baseURL = "https://www.google.com/search?q="

    var searchText = searchInput.value; 

    if (searchText){
        var encodedText = encodeURIComponent(searchText)
        window.open(baseURL + encodedText, '_blank')

    } else {
        window.open('https://github.com/richie-cs/', '_blank')
    }
}
