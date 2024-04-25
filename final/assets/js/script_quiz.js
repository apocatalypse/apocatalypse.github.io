/*return back to top of page on reload*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

/*defining the variables that will store the score for each personality trait*/
let I_score = { id: "I", score: 0 };
let E_score = { id: "E", score: 0 };

let N_score = { id: "N", score: 0 };
let S_score = { id: "S", score: 0 };

let T_score = { id: "T", score: 0 };
let F_score = { id: "F", score: 0 };

let J_score = { id: "J", score: 0 };
let P_score = { id: "P", score: 0 };

/* ------------------------------------------------------------------ */

function tallyScore(trait_score, qset, q_num) {
    trait_score.score++; /*add +1 to score for the appropriate trait corresponding to the clicked button*/
    console.log(trait_score) /*sanity check*/
    document.getElementById(qset).scrollIntoView({behavior: "smooth",  block: "start"}) /*scroll to next question*/
    document.getElementById(`a1-q${q_num}`).onclick = null; /*make it unable to select an answer again for the same question*/
    document.getElementById(`a2-q${q_num}`).onclick = null; /* ^^ */

    document.getElementById(`a1-q${q_num}`).classList.remove("hover"); 
    document.getElementById(`a2-q${q_num}`).classList.remove("hover"); 
}

/*QUESTIONS ONCLICK*/

document.getElementById("a1-q1").onclick = function() {
    tallyScore(E_score, "qset2","1");
    document.getElementById("a1-q1").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q1").onclick = function() {
    tallyScore(I_score, "qset2", "1");
    document.getElementById("a2-q1").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q2").onclick = function() {
    tallyScore(S_score, "qset3", "2");
    document.getElementById("a1-q2").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q2").onclick = function() {
    tallyScore(N_score, "qset3", "2");
    document.getElementById("a2-q2").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q3").onclick = function() {
    tallyScore(J_score, "qset4", "3");
    document.getElementById("a1-q3").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q3").onclick = function() {
    tallyScore(P_score, "qset4", "3");
    document.getElementById("a2-q3").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q4").onclick = function() {
    tallyScore(N_score, "qset5", "4");
    document.getElementById("a1-q4").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q4").onclick = function() {
    tallyScore(S_score, "qset5", "4");
    document.getElementById("a2-q4").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q5").onclick = function() {
    tallyScore(S_score, "qset6", "5");
    document.getElementById("a1-q5").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q5").onclick = function() {
    tallyScore(N_score, "qset6", "5");
    document.getElementById("a2-q5").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q6").onclick = function() {
    tallyScore(T_score, "qset7", "6");
    document.getElementById("a1-q6").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q6").onclick = function() {
    tallyScore(F_score, "qset7", "6");
    document.getElementById("a2-q6").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q7").onclick = function() {
    tallyScore(T_score, "qset8", "7");
    document.getElementById("a1-q7").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q7").onclick = function() {
    tallyScore(F_score, "qset8", "7");
    document.getElementById("a2-q7").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q8").onclick = function() {
    tallyScore(T_score, "qset9", "8");
    document.getElementById("a1-q8").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q8").onclick = function() {
    tallyScore(F_score, "qset9", "8");
    document.getElementById("a2-q8").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q9").onclick = function() {
    tallyScore(E_score, "qset10", "9");
    document.getElementById("a1-q9").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q9").onclick = function() {
    tallyScore(I_score, "qset10", "9");
    document.getElementById("a2-q9").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q10").onclick = function() {
    tallyScore(I_score, "qset11", "10");
    document.getElementById("a1-q10").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q10").onclick = function() {
    tallyScore(E_score, "qset11", "10");
    document.getElementById("a2-q10").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q11").onclick = function() {
    tallyScore(P_score, "qset12", "11");
    document.getElementById("a1-q11").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q11").onclick = function() {
    tallyScore(J_score, "qset12", "11");
    document.getElementById("a2-q11").style.backgroundColor = "#789F44";
}

document.getElementById("a1-q12").onclick = function() {
    tallyScore(P_score, "result", "12");
    document.getElementById("a1-q12").style.backgroundColor = "#789F44";
}

document.getElementById("a2-q12").onclick = function() {
    tallyScore(J_score, "result", "12");
    document.getElementById("a2-q12").style.backgroundColor = "#789F44";
}

let personality = "";

function decidePersonality() {
    if (I_score.score > E_score.score) {
        personality = personality.concat("I");
    }
    else {
        personality = personality.concat("E");
    }

    if (N_score.score > S_score.score) {
        personality = personality.concat("N");
    }
    else {
        personality = personality.concat("S");
    }

    if (F_score.score > T_score.score) {
        personality = personality.concat("F");
    }
    else {
        personality = personality.concat("T");
    }

    if (J_score.score > P_score.score) {
        personality = personality.concat("J");
    }
    else {
        personality = personality.concat("P");
    }
    return personality;
}

function goToResultsPage(path_to_result) {
    window.location.href = path_to_result;
}

document.getElementById("result").onclick = function () {
    decidePersonality();
    console.log(personality);
    let path_to_result = `${personality}.html`
    goToResultsPage(path_to_result);
}

