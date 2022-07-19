function logo()
{
    let list =
    [
        "fa-solid fa-bowl-food",
        "fa-solid fa-bacon",
        "fa-solid fa-burger",
        "fa-solid fa-carrot",
        "fa-solid fa-egg",
        "fa-solid fa-apple-whole",
        "fa-solid fa-bottle-water",
        "fa-solid fa-bowl-rice",
        "fa-solid fa-bread-slice",
        "fa-solid fa-candy-cane",
        "fa-solid fa-cookie",
        "fa-solid fa-cheese",
        "fa-solid fa-champagne-glasses",
        "fa-solid fa-hotdog",
        "fa-solid fa-ice-cream",
        "fa-solid fa-mug-saucer",
        "fa-solid fa-pizza-slice",
        "fa-solid fa-drumstick-bite",
    ];

    document.getElementById("logo").classList = list[Math.floor(Math.random()*list.length)];
}

function menu()
{
    document.getElementById("menu").style.display = "inline";
    document.getElementById("cross").style.display = "flex";
    document.getElementById("bar").style.display = "none";
    document.getElementById("header").style.height = "auto";
}

function menunt()
{
    document.getElementById("menu").style.display = "none";
    document.getElementById("cross").style.display = "none";
    document.getElementById("bar").style.display = "flex";
    document.getElementById("header").style.height = "70px";
}

function init()
{
    logo();
    load();
}