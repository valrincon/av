// //Quiz
// function submitQuiz() {
//     // Define the correct answers
//     const correctAnswers = {
//         q1: new Date ("2024-01-02"),
//         q2: "meeting place answer",
//         q3: "favorite memory answer"
//     };
//
//     // Get user's answers
//     const userAnswers = {
//         q1: new Date (document.getElementById("q1").value),
//         q2: document.getElementById("q2").value.toLowerCase(),
//         q3: document.getElementById("q3").value.toLowerCase()
//     };
//
//     // Compare user's answers with correct answers
//     let correctCount = 0;
//     for (const question in correctAnswers) {
//         if (question === "q1") {
//             // Check if the dates match (ignoring the time component)
//             if (userAnswers[question].toDateString() === correctAnswers[question].toDateString()) {
//                 correctCount++;
//             }
//         } else if (userAnswers[question] === correctAnswers[question]) {
//             correctCount++;
//         }
//     }
//
//     // Display the result
//     const resultElement = document.getElementById("quiz-result");
//     resultElement.textContent = `You got ${correctCount} out of ${Object.keys(correctAnswers).length} questions right!`;
//
//     // You can customize the result message based on the correctCount
// }
//
//Countdown
const dates = [
    {   date: new Date("2024-03-14T17:18:00"), id: "cd-1" }, // Adjust the date and time
    {   date: new Date("2024-03-02T00:00:00"), id: "cd-2" }
    ];

// Function to update the countdown
function updateCountdown(targetDate, elementId) {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const countdownElement = document.getElementById(elementId);
        countdownElement.innerHTML = `<div>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</div>`;
    } else {
        // If the countdown is over
        const countdownElement = document.getElementById(elementId);
        if (elementId === "cd-2") {
            countdownElement.innerHTML = `<div>NOW! Happy ${2} Month Anniversary</div>`;
        }
        else {
            countdownElement.innerHTML = `<div>NOW!</div>`;
        }
    }
}

function updateAll() {
    dates.forEach((countdown) => {
        updateCountdown(countdown.date, countdown.id);
    });
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the countdown when the page loads
updateAll();
