const facts = [
  "Cristiano Ronaldo is the first player to score in 5 World Cups.",
  "The fastest red card in football history was after just 2 seconds!",
  "Lionel Messi has won the most Ballon d'Or awards (8).",
  "The World Cup is the most-watched sporting event on Earth.",
  "Goalkeepers can score goals too – famous ones include Rogério Ceni."
 " Football is the world’s most popular sport.
" The first FIFA World Cup was in 1930.
" Pelé scored over 1,000 career goals.
"Lionel Messi has won 7 Ballon d’Or awards.
" Cristiano Ronaldo has over 850 career goals.
" The fastest goal in football history was 2.4 seconds.
" The largest football stadium is Rungrado 1st of May Stadium in North Korea.
"England won the World Cup in 1966.
" Football was first played in the 19th century.
"A football match lasts 90 minutes.
" Neymar’s full name is longer than most people’s names.
"The FIFA World Cup trophy weighs 6.1 kg.
"Diego Maradona scored the “Hand of God” goal in 1986.
"The offside rule exists to prevent goal-hanging.
"Zinedine Zidane headbutted an opponent in the 2006 World Cup final.
" The first live televised football match was in 1937.


17. The term “soccer” comes from “association football.”


18. Messi started his professional career at 17.


19. Ronaldo’s transfer to Manchester United in 2003 cost £12.24 million.


20. The Premier League started in 1992.


21. Thierry Henry is Arsenal’s all-time top scorer.


22. The record for most goals in a single World Cup is 13 (Just Fontaine, 1958).


23. The FIFA World Cup is held every 4 years.


24. The UEFA Champions League was called the European Cup before 1992.


25. Lionel Messi played for Barcelona for 21 years.


26. Cristiano Ronaldo has played for Sporting CP, Manchester United, Real Madrid, Juventus, and Al-Nassr.


27. David Beckham is famous for his free kicks.


28. The red card was introduced in 1970.


29. The yellow card warns players for fouls.


30. The longest football match lasted 3 days (English amateur match).


31. The offside trap is a key defensive tactic.


32. Goal-line technology was first used in the 2014 World Cup.


33. Football boots used to be heavy leather shoes.


34. Johan Cruyff revolutionized “Total Football.”


35. FC Barcelona’s motto is “Més que un club” (More than a club).


36. Bayern Munich has won the most Bundesliga titles.


37. Manchester United has the most English top-flight titles.


38. Lionel Messi scored a goal against every La Liga team.


39. Cristiano Ronaldo has scored in every UEFA Champions League season he played.


40. The FIFA World Cup has been hosted in 22 countries.


41. The first World Cup outside Europe and South America was in 2002 (Korea/Japan).


42. Football is played by over 250 million players worldwide.


43. The fastest red card was 2 seconds after kickoff.


44. Italy has won 4 World Cups.


45. Brazil has won 5 World Cups—the most.


46. Germany has won 4 World Cups.


47. Argentina has won 3 World Cups.


48. England has won 1 World Cup.


49. France has won 2 World Cups.


50. The Maracanã Stadium hosted the 1950 World Cup final.


51. Lionel Messi scored 91 goals in a calendar year (2012).


52. Cristiano Ronaldo is the first player to score 200 Champions League goals.


53. The UEFA Euro Championship is held every 4 years.


54. The Ballon d’Or started in 1956.


55. The first African World Cup goal was scored in 1934.


56. Football is the official national sport of Brazil.


57. Diego Maradona played for Napoli and won 2 Serie A titles.


58. The first African team in a World Cup was Egypt (1934).


"The first Asian team in a World Cup was Indonesia (1938).


60. Lionel Messi has over 800 career goals.
];

function newFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[randomIndex];
}

// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
