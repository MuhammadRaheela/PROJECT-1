let Speech = new SpeechSynthesisUtterance();

let Voices = [];

let VoicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    Voices = window.speechSynthesis.getVoices();
    Speech.voice = Voices[0];

    Voices.forEach((voice, i) => (VoicesSelect.options[i] = new Option(voice.name, i)))
}

document.querySelector("button").addEventListener("click", () => {
    Speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(Speech)
})