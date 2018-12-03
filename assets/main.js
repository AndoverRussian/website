window.onload = function () {
    $("word").click(function () {
        console.log("clicked")
        var word = $(this).text();
        window.open('https://en.wiktionary.org/wiki/' + word + "#Russian", '_blank');
    });
}

function exerciseGiveAnswer(element) {
    var input = $(element).prev();
    var answer = input.attr("answer");
    $(input).val(answer);
    checkExercise(input);
}

function checkExercise(element) {
    var input = $(element);
    var button = input.next();
    var val = input.val();
    var answer = input.attr("answer");
    if (val == answer) {
        input.removeClass("is-invalid");
        input.addClass("is-valid");
        button.addClass("btn-success");
        button.removeClass("btn-default")
    } else {
        input.removeClass("is-valid");
        button.removeClass("btn-success");
        button.addClass("btn-default");
        input.addClass("is-invalid");
    }
}

// From https://stackoverflow.com/questions/18999501/bootstrap-3-keep-selected-tab-on-page-refresh

$(document).ready(function () {
    if (location.hash) {
        $("a[href='" + location.hash + "']").tab("show");
    }
    $(document.body).on("click", "a[data-toggle]", function (event) {
        location.hash = this.getAttribute("href");
    });
});

$(window).on("popstate", function () {
    var anchor = location.hash || $("a[data-toggle='tab']").first().attr("href");
    $("a[href='" + anchor + "']").tab("show");
});

// End from