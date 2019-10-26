$(document).ready(function() {


    // Create a variable array to store searchable topics, and initialize it wtih 5 values.
    let topics = ["My Hero Academia", "Attack on Titan", "Demon Slayer", "Yu Yu Hakusho", "Code Geass"]

    // Create a function to make buttons for each item in the "topics" array, both initially and whenever a new term is pushed to the array. 
    function makeButtons() {
        $("#buttonDiv").empty();
        for (let i = 0; i < topics.length; i ++) {
            var btn = $("<button>");
            btn.attr("value", topics[i]);
            btn.text(topics[i]);
            btn.attr("class", "gifButton");
            $("#buttonDiv").append(btn);
        }
    }

    // Call the makeButtons function to print initial buttons to screen
    makeButtons();

    // When one of the GIF buttons is clicked, use AJAX to search Giphy for top 10 gifs tagged with that term
    $(document.body).on("click", ".gifButton", function() {
        $("#gifDisplay").empty()
        let query = $(this).val();
        const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=yQZnEQW0eMlyNZ4WYRZhN5QZcREtbMTp&q=" + query + "&limit=10&offset=0&rating=G&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After completing query, return that response and save response.data as results variable for each gif.
        .then(function(response) {
            let results = response.data;
            for (var i = 0; i < results.length; i++) {
                let gifDiv = $("<div>");
                let rating = results[i].rating;
                let p = $("<p>").text(`Rating: ${rating}`);
                let animeGif = $("<img>");
                let animated = results[i].images.fixed_height.url;
                let still = results[i].images.fixed_height_still.url;
                animeGif.attr("src", results[i].images.fixed_height_still.url);
                animeGif.attr("class", "gif")
                animeGif.attr("data-state", "still")
                animeGif.attr("data-still", still)
                animeGif.attr("data-animate", animated)
                gifDiv.prepend(p);
                gifDiv.prepend(animeGif);
                $("#gifDisplay").prepend(gifDiv);
            }});
        })

    // When the Submit button is clicked, check for a value in the input, then create a button with that value. If input is empty, alert the user.
    $("#submit-button").on("click", function(event) {
        
        if ($("#show-input").val() !== "") {
            event.preventDefault();
            let showName=$("#show-input")
                .val()
                .trim()
                .toLowerCase()
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            topics.push(showName);
            console.log(topics);
            makeButtons();
            $("#giphy-form input[type='text']").val("");
        } else {
            alert("Please enter a show title or other term to proceed")
        }
    })

    // When a gif is clicked, if it is currently in its still state, animate it. If it is currently animated, revert to still state.
    $(document).on("click", ".gif", function() {
        state = $(this).attr("data-state")
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate")
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })
});