/*document.getElementById("calculate").onclick(function () { alert("this worked!") });*/


$("#calculate").click(function () {
    var assign = $("#assign").val() * .55;
    var gproj = $("#gproj").val() * .05;
    var quiz = $("#quiz").val() * .1;
    var exam = $("#exam").val() * .2;
    var intex = $("#intex").val() * .1;

    var percent = (assign + gproj + quiz + exam + intex);
    var score = "";

    if (percent >= 94) {
        score = "A";
    }
    else if (percent >= 90 && percent < 94) {
        score = "A-";
    }
    else if (percent >= 87 && percent < 90) {
        score = "B+";
    }
    else if (percent >= 84 && percent < 87) {
        score = "B";
    }
    else if (percent >= 80 && percent < 84) {
        score = "B-";
    }
    else if (percent >= 77 && percent < 80) {
        score = "C+";
    }
    else if (percent >= 74 && percent < 77) {
        score = "C";
    }
    else if (percent >= 70 && percent < 74) {
        score = "C-";
    }
    else if (percent >= 67 && percent < 70) {
        score = "D+";
    }
    else if (percent >= 64 && percent < 67) {
        score = "D";
    }
    else if (percent >= 60 && percent < 64) {
        score = "D-";
    }
    else {
        score = "E";
    };

    alert("Your final percentage is: " + percent.toPrecision(2) + "%\nYour final score is: " +score);
});