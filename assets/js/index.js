$(document).ready(function () {
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    for (i in letters) {
        var newBtn = $("<button>");
        newBtn.addClass("letterBtn");
        newBtn.attr("data-letter", letters[i]);
        newBtn.text(letters[i]);
        $("#buttons").append(newBtn);
    }

    $('.letterBtn').on('click', function clikButton() {
        var fridgeMagent = $("<p>");
        fridgeMagent.text($(this).attr("data-letter"));
        $("#display").append(fridgeMagent);
    })

    $("#clear").click(function () {
        $("#display").empty();
    })
})