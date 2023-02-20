const jokes = [
    "I only know 25 letters of the alphabet. I don't know y.",
    "I don't trust stairs. They're always up to something.",
    "I have a joke about chemistry, but I don't think it will get a reaction.",
    "What kind of shoes do ninjas wear? Sneakers!",
];
const midiv = document.querySelector('.joke');

function randomjoke(){
    const index = Math.floor(Math.random() * jokes.length);
    midiv.textContent = jokes[index];
}