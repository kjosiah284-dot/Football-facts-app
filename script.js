const facts = [
  "Cristiano Ronaldo is the first player to score in 5 World Cups.",
  "The fastest red card in football history was after just 2 seconds!",
  "Lionel Messi has won the most Ballon d'Or awards (8).",
  "The World Cup is the most-watched sporting event on Earth.",
  "Goalkeepers can score goals too – famous ones include Rogério Ceni."
];

function newFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[randomIndex];
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}