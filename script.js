/*global $*/
$(document).ready(function() {
    var number;
    number = "7";

    $("button").click(function() {
            var input;
            input = Number($("input").val());
       
        if (input===7) {
            $("#result").append("OOOOOOOOHHHH You smart, arent you!!!");
        }
        else if (input < 7) {
            $("#result").append("wrong guess! Too low");
        }
        else if (input > 7) {
            $("#result").append("wrong guess! To high");
        }

    });
});
