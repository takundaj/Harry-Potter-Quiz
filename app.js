//DOM queries
const quizform = document.querySelector(".quiz-form");
const scoreLabel = document.querySelector(".score-label");
const scoreLabelContainer = document.querySelector(".score-label-container");

quizform.addEventListener("submit", (e) => {
  e.preventDefault();

  scoreLabelContainer.classList.remove("hide");

  window.scrollTo(0, 0);

  const correctAnswers = ["A", "B", "C", "B"];
  const userAnswers = [
    quizform.q1.value,
    quizform.q2.value,
    quizform.q3.value,
    quizform.q4.value,
  ];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 100 / correctAnswers.length;
    }
  });

  console.log(score);

  let number = 0;

  const animate = setInterval(() => {
    if (number === score) {
      clearInterval(animate);
    }

    scoreLabel.textContent = `${number}%`;
    number++;
  }, 2);
});
