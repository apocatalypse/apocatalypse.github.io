function removeHidden(button_to_appear) {
    let button = document.getElementById(button_to_appear);
    button.classList.remove("hidden");
    document.getElementById("clickme-button").classList.add("hidden");
}

document.getElementById("clickme-button").onclick = function() {
    removeHidden("welcome-button");
}

document.getElementById("welcome-button").onclick = function() {
    removeHidden("start-button");
}




function slideAway(grass_num) {
    document.getElementById(grass_num).classList.add('disappear');
}


document.getElementById("grass1").onmouseover = function () {
    slideAway("grass1")
}

document.getElementById("grass2").onmouseover = function () {
    slideAway("grass2")
}

document.getElementById("grass3").onmouseover = function () {
    slideAway("grass3")
}

document.getElementById("grass4").onmouseover = function () {
    slideAway("grass4")
}

document.getElementById("grass5").onmouseover = function () {
    slideAway("grass5")
}

document.getElementById("grass6").onmouseover = function () {
    slideAway("grass6")
}

document.getElementById("grass8").onmouseover = function () {
    slideAway("grass8")
}

document.getElementById("grass9").onmouseover = function () {
    slideAway("grass9")
}

document.getElementById("grass10").onmouseover = function () {
    slideAway("grass10")
}

document.getElementById("grass11").onmouseover = function () {
    slideAway("grass11")
}

document.getElementById("grass12").onmouseover = function () {
    slideAway("grass12")
}

document.getElementById("grass13").onmouseover = function () {
    slideAway("grass13")
}
