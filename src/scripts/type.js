const carouselTexts = [
  { text: "Lovely", color: "red" },
  { text: "Beautiful", color: "blue" },
  { text: "Amazing", color: "green" },
  { text: "Awesome", color: "yellow" },
  { text: "Cool", color: "orange" },
];

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.text.split("");
  let i = 0;
  document.getElementById(eleRef).style.color = sentence.color;
  while (i < letters.length) {
    await waitForMs(delay);
    document.getElementById(eleRef).innerHTML += letters[i];
    i++;
  }

  return;
}

async function deleteSentence(eleRef) {
  const sentence = document.getElementById(eleRef).innerHTML;
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.getElementById(eleRef).innerHTML = letters.join("");
  }
  return;
}
function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// on document ready call the function
document.addEventListener("DOMContentLoaded", async function () {
  let count = 0;
  while (true) {
    typeSentence(carouselTexts[count], "sentence");
    await waitForMs(2000);
    deleteSentence("sentence");
    await waitForMs(1000);
    if (count == carouselTexts.length - 1) {
      count = 0;
    } else count++;
  }
});
