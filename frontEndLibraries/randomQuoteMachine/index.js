var colors = ['#16a085', '#27ae60',
    '#2c3e50', '#f39c12',
    '#e74c3c', '#9b59b6',
    '#FB6964', '#342224',
    "#472E32", "#BDBB99",
    "#77B1A9", "#73A857",
    "#cfad87", "#cfad87",
    "#5cc9f5", "#dfebd0"
];

var quotes = [
    "11111",
    "22222",
    "33333",
    "44444"
]

/* Generating new quote */
$("#new-quote").click(renderNewQuote)

function renderNewQuote() {
    
    /* randomize color background */
    var color = Math.floor(Math.random() * colors.length);
    $("body").css({
        "background-color": colors[color],
        "transition": "background-color ease-in 1s"
    })
    $("button").css({
        "background-color": colors[color],
        "transition": "background-color ease-in 1s"
    })
    $(".quote").css({
        "color": colors[color],
        "transition": "color ease-in 1s"
    })

    randQuote = getRandQuote()
    $("#text").html(randQuote)
}

function getRandQuote() {
    randIndex = Math.floor(Math.random() * quotes.length)
    randQuote = quotes[randIndex]
    return randQuote
}