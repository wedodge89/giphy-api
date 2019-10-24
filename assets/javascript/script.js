$(document).ready(function() {

    let topics = ["My Hero Academia", "Attack on Titan", "Demon Slayer", "Yu Yu Hakusho", "Code Geass"]

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

    makeButtons();

    $(document.body).on("click", ".gifButton", function() {
        let query = $(this).val();
        const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=yQZnEQW0eMlyNZ4WYRZhN5QZcREtbMTp&q=" + query + "&limit=10&offset=0&rating=G&lang=en"
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            let results = response.data;
            for (var i = 0; i < results.length; i++) {
                let gifDiv = $("<div>");
                let rating = results[i].rating;
                let p = $("<p>").text(`Rating: ${rating}`);
                let animeGif = $("<img>");
                animeGif.attr("src", results[i].images.fixed_height_still.url);
                animeGif.attr("data-state", "still")
                gifDiv.prepend(p);
                gifDiv.prepend(animeGif);
                $("#gifDivDiv").prepend(gifDiv);
            }});
        })

    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        let showName=$("#show-input").val().trim();
        topics.push(showName);
        console.log(topics);
        makeButtons();
        $("#giphy-form input[type='text']").val("");
    })

    $(document).on("click", ".clickableGif", function() {
        state = $(this).attr("data-state")
        if (state = "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate")
        }
    })
});