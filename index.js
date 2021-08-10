const textInput = document.getElementById("text");
const speedInput = document.getElementById("speed");
const playbutton = document.getElementById("play");
const pausebutton = document.getElementById("pause");
const stopbutton = document.getElementById("stop");
// const textval = textInput.value;
let currentchar;
// button to click
// playbutton 
playbutton.addEventListener("click", () => {
  playText(textInput.value);
});
//pausebutton
pausebutton.addEventListener("click", pauseText);
//stopbutton
stopbutton.addEventListener("click", stopText);
// speedInput button 
speedInput.addEventListener("input", () => {
  stopText();
  playText(utterance.text.substring(currentchar));
});
// utterance
const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  textInput.disabled = false;
});
utterance.addEventListener("boundary", (e) => {
  currentchar = e.charIndex;
});
// functions
function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = speedInput.value || 1;
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
