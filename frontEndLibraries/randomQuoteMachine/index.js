const colors = ['#16a085', '#27ae60',
    '#2c3e50', '#f39c12',
    '#e74c3c', '#9b59b6',
    '#FB6964', '#342224',
    "#472E32", "#BDBB99",
    "#77B1A9", "#73A857",
    "#cfad87", "#cfad87",
    "#5cc9f5", "#dfebd0"
];

function renderNewQuote() {

    /* randomly get quote & author, then render them */
    $.getJSON('https://quota.glitch.me/random', (data) => {
        quote = data.quoteText
        author = "- " + data.quoteAuthor
        textFadeEffect("#text", quote)
        textFadeEffect("#author", author)
    })

    /* randomize color background */
    var color = Math.floor(Math.random() * colors.length);
    $("body").css({
        "background-color": colors[color],
        "transition": "background-color ease-in 1s"
    })
    $("#title").css({
        "color": colors[color],
        "transition": "color ease-in 1s"
    })
    $("button").css({
        "background-color": colors[color],
        "transition": "background-color ease-in 1s"
    })
    $(".quote").css({
        "color": colors[color],
        "transition": "color ease-in 1s"
    })
}

/* fade out & fade in a  text */
function textFadeEffect(id, newText) {
    $(id).fadeOut(1000, () => {
        $(id).hide();
    });
    $(id).fadeIn(0, () => {
        $(id).html(newText);
    });
}

$(document).ready(function () {
    //TODO: 1. random quote at start. 2. twitter sharing

    /* Generating new quote */
    $("#new-quote").click(renderNewQuote)
})