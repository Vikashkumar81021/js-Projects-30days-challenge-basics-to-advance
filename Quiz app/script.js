const quiz = [
  {
    question: "What is the most used programming language in 2024?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];
const question = document.getElementById("quiz-question");
const ansA = document.getElementById("text-option-a");
const ansB = document.getElementById("text-option-b");
const ansC = document.getElementById("text-option-c");
const ansD = document.getElementById("text-option-d");

const btn = document.getElementById("submit");
const ansWer = document.querySelectorAll(".answer");
let currentQuestion = 0;
let score = 0;

question.textContent = quiz[currentQuestion].question;
ansA.textContent = quiz[currentQuestion].ans1text;
ansB.textContent = quiz[currentQuestion].ans2text;
ansC.textContent = quiz[currentQuestion].ans3text;
ansD.textContent = quiz[currentQuestion].ans4text;

btn.addEventListener("click", () => {
  const checkedAns = document.querySelector('input[type="radio"]:checked');
  if (checkedAns === null) {
    alert("please select option");
  } else {
    if (
      checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer
    ) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      question.textContent = quiz[currentQuestion].question;
      ansA.textContent = quiz[currentQuestion].ans1text;
      ansB.textContent = quiz[currentQuestion].ans2text;
      ansC.textContent = quiz[currentQuestion].ans3text;
      ansD.textContent = quiz[currentQuestion].ans4text;
      checkedAns.checked = false;
    } else {
      alert("your score is" + score);
      location.reload();
    }
  }
});
