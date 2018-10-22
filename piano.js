function init(){
  Mousetrap.bind('y', () => play(0));
  Mousetrap.bind('s', () => play(1));
  Mousetrap.bind('x', () => play(2));
  Mousetrap.bind('d', () => play(3));
  Mousetrap.bind('c', () => play(4));
  Mousetrap.bind('v', () => play(5));
  Mousetrap.bind('g', () => play(6));
  Mousetrap.bind('b', () => play(7));
  Mousetrap.bind('h', () => play(8));
  Mousetrap.bind('n', () => play(9));
  Mousetrap.bind('j', () => play(10));
  Mousetrap.bind('m', () => play(11));

  Mousetrap.bind(',', () => play(12));
  Mousetrap.bind('l', () => play(13));
  Mousetrap.bind('.', () => play(14));
  Mousetrap.bind('ö', () => play(15));
  Mousetrap.bind('-', () => play(16));

  Mousetrap.bind('q', () => play(12));
  Mousetrap.bind('2', () => play(13));
  Mousetrap.bind('w', () => play(14));
  Mousetrap.bind('3', () => play(15));
  Mousetrap.bind('e', () => play(16));
  Mousetrap.bind('r', () => play(17));
  Mousetrap.bind('5', () => play(18));
  Mousetrap.bind('t', () => play(19));
  Mousetrap.bind('6', () => play(20));
  Mousetrap.bind('z', () => play(21));
  Mousetrap.bind('7', () => play(22));
  Mousetrap.bind('u', () => play(23));

  Mousetrap.bind('i', () => play(24));
  Mousetrap.bind('9', () => play(25));
  Mousetrap.bind('o', () => play(26));
  Mousetrap.bind('0', () => play(27));
  Mousetrap.bind('p', () => play(28));
  Mousetrap.bind('ü', () => play(29));
  Mousetrap.bind('´', () => play(30));
  Mousetrap.bind('+', () => play(31));
}

function play(value){
  let octave = parseInt(document.getElementById("octave").value) + 2;
  let note = 12 * octave + value;
  let sample = new Audio(note + ".mp3");
  sample.play();
}
