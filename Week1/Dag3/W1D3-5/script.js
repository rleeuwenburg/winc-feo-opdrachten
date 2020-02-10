let color = ['yellow', 'blue', 'red', 'orange'];
let y = 0;
while (y < color.length) {
  console.log(color[y]);
  y++;
}

for (y = 0; y < color.length; y++) {
  console.log(color[y]);
}

color.forEach(element => console.log(element));

// 1. Hoeveel regels neemt mijn for loop in beslag? 3
// 2. Hoeveel regels neemt mijn `forEach` method in beslag? 1
// 3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? efficienter, want korter en daardoor ook minder foutgevoelig en makkelijker te herhalen. Geen tussenvariabelen nodig.
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? forEach, gelijk duidelijk wat er gebeurt
// 4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
// sorry, maar ik heb geen flauw idee wat er wordt bedoeld met deze vraag. Het duizelt allemaal een beetje.
