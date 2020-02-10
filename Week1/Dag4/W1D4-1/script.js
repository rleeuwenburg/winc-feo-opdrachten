document.body.innerHTML('ik ben een nieuwe paragraaf');

document.getElementById('first-section');
const firstSection = document.getElementById('first-section');
// firstSection
console.log(firstSection);

document.getElementsByClassName('paragraph');
const paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs); // laat HTML-collection zien
Array.from(paragraphs).forEach(function(item) {
  console.log(item);
}); // laat elk item afzonderlijk onder elkaar zien
