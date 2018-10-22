function init() {
  Mousetrap.bind("y", () => playLow(0));
  Mousetrap.bind("s", () => playLow(1));
  Mousetrap.bind("x", () => playLow(2));
  Mousetrap.bind("d", () => playLow(3));
  Mousetrap.bind("c", () => playLow(4));
  Mousetrap.bind("v", () => playLow(5));
  Mousetrap.bind("g", () => playLow(6));
  Mousetrap.bind("b", () => playLow(7));
  Mousetrap.bind("h", () => playLow(8));
  Mousetrap.bind("n", () => playLow(9));
  Mousetrap.bind("j", () => playLow(10));
  Mousetrap.bind("m", () => playLow(11));

  Mousetrap.bind(",", () => playLow(12));
  Mousetrap.bind("l", () => playLow(13));
  Mousetrap.bind(".", () => playLow(14));
  Mousetrap.bind("ö", () => playLow(15));
  Mousetrap.bind("-", () => playLow(16));

  Mousetrap.bind("q", () => playHigh(0));
  Mousetrap.bind("2", () => playHigh(1));
  Mousetrap.bind("w", () => playHigh(2));
  Mousetrap.bind("3", () => playHigh(3));
  Mousetrap.bind("e", () => playHigh(4));
  Mousetrap.bind("r", () => playHigh(5));
  Mousetrap.bind("5", () => playHigh(6));
  Mousetrap.bind("t", () => playHigh(7));
  Mousetrap.bind("6", () => playHigh(8));
  Mousetrap.bind("z", () => playHigh(9));
  Mousetrap.bind("7", () => playHigh(10));
  Mousetrap.bind("u", () => playHigh(11));

  Mousetrap.bind("i", () => playHigh(12));
  Mousetrap.bind("9", () => playHigh(13));
  Mousetrap.bind("o", () => playHigh(14));
  Mousetrap.bind("0", () => playHigh(15));
  Mousetrap.bind("p", () => playHigh(16));
  Mousetrap.bind("ü", () => playHigh(17));
  Mousetrap.bind("´", () => playHigh(18));
  Mousetrap.bind("+", () => playHigh(19));
}

function playLow(value) {
  let octave = parseInt(document.getElementById("octave-low").value) + 2;
  play(value, octave);
}

function playHigh(value) {
  let octave = parseInt(document.getElementById("octave-high").value) + 2;
  play(value, octave);
}

function play(value, octave) {
  let note = 12 * octave + value;
  let sample = new Audio(note + ".mp3");
  sample.play();
}
