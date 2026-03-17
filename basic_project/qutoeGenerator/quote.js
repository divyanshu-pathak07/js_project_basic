const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "JavaScript is not just a language, it's an experience.",
  "Make it work, make it right, make it fast.",
  "Good code is its own best documentation.",
  "Programs must be written for people to read.",
  "Simplicity is the soul of efficiency.",
  "Code never lies, comments sometimes do.",
  "Fix the cause, not the symptom.",
  "Small steps every day lead to big results.",
  "Every expert was once a beginner.",
  "Don’t fear bugs, learn from them.",
  "Practice makes you a better developer.",
  "Struggle is part of the coding journey.",
  "Consistency beats talent in coding.",
  "99% of coding is debugging.",
  "It works on my machine 😅",
  "When in doubt, console.log() it.",
  "Keep calm and write JavaScript."
];


const head = document.querySelector('h3');
const button = document.querySelector('button')
button.addEventListener('click', ()=>{
    head.style.opacity = 0;
    setTimeout(()=>{
    const index = Math.floor(Math.random()*quotes.length);
    head.textContent = quotes[index];
    head.style.opacity = 1;
    },200)
    
})
