// This script checks answers, calculates score,
// and shows results after the quiz is submitted

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page from refreshing

    let score = 0;
    let total = 5;
    let results = "";

    // Question 1 (fill in blank)
    let q1 = document.getElementById("q1").value.toLowerCase().trim();
    if (q1 === "hypertext") {
        score++;
        results += "<p class='correct'>Q1: Correct (HyperText)</p>";
    } else {
        results += "<p class='incorrect'>Q1: Incorrect (Correct: HyperText)</p>";
    }

    // Question 2
    let q2 = document.querySelector("input[name='q2']:checked");
    if (q2 && q2.value === "Gecko") {
        score++;
        results += "<p class='correct'>Q2: Correct (Gecko)</p>";
    } else {
        results += "<p class='incorrect'>Q2: Incorrect (Correct: Gecko)</p>";
    }

    // Question 3
    let q3 = document.querySelector("input[name='q3']:checked");
    if (q3 && q3.value === "JavaScript") {
        score++;
        results += "<p class='correct'>Q3: Correct (JavaScript)</p>";
    } else {
        results += "<p class='incorrect'>Q3: Incorrect (Correct: JavaScript)</p>";
    }

    // Question 4
    let q4 = document.querySelector("input[name='q4']:checked");
    if (q4 && q4.value === "They can support offline access") {
        score++;
        results += "<p class='correct'>Q4: Correct</p>";
    } else {
        results += "<p class='incorrect'>Q4: Incorrect (Correct: Offline access)</p>";
    }

    // Question 5 (multiple answers)
    let selected = document.querySelectorAll("input[name='q5']:checked");
    let answers = [];
    selected.forEach(function(item) {
        answers.push(item.value);
    });

    if (
        answers.includes("HTML") &&
        answers.includes("CSS") &&
        answers.includes("JavaScript") &&
        answers.length === 3
    ) {
        score++;
        results += "<p class='correct'>Q5: Correct</p>";
    } else {
        results += "<p class='incorrect'>Q5: Incorrect (HTML, CSS, JavaScript)</p>";
    }

    // final score
    let percent = (score / total) * 100;
    let resultText = percent >= 70 ? "Pass" : "Fail";

    results =
        "<p><strong>Result:</strong> " + resultText + "</p>" +
        "<p><strong>Score:</strong> " + score + " / " + total + "</p>" +
        results;

    document.getElementById("quiz-results").innerHTML = results;
});

// reset button clears results
document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("quiz-results").innerHTML = "";
});