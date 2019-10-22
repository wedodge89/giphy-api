$(document).ready(function() {
    
let topics = ["My Hero Academia", "Attack on Titan", "Demon Slayer", "Yu Yu Hakusho", "Code Geass"]

function makeButtons() {
    $("#gifs-go-here").empty();
    for (i = 0; i < topics.length; i ++) {
        $("<button>").innerHTML(`${topics[i]}`)
            .appendTo("#gifs-go-here")
        };
}

makeButtons()
});