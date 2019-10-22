$(document).ready(function() {

    let topics = ["My Hero Academia", "Attack on Titan", "Demon Slayer", "Yu Yu Hakusho", "Code Geass"]

    function printButtons() {
        $("#buttonDiv").empty();
        for (let i = 0; i < topics.length; i ++) {
            var a = $("<button>");
            a.attr("value", topics[i]);
            a.text(topics[i]);
            a.attr("class", "gifButton");
            $("#buttonDiv").append(a);
        }
    }

    printButtons();

    $(".gifButton").on("click", function() {
        let query = $(this).val()
        console.log(query)
    })
});