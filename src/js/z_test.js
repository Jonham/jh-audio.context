function jhTest() {
  loadSource('http://localhost/music/2012.mp3');
  window.gain = audioctx.createGain();
  window.source = audioctx.createBufferSource();
  
  source.connect(gain);
  gain.connect(audioctx.destination);
}

var actx = new AudioContext();
var audio = document.querySelector('audio');
audio.volume = 0.05;
var media = actx.createMeddiaElementSource(audio);
var gain = actx.createGain();

media.connect(gain);
gain.connect(actx.destination);

// connect to live Stream
function getLiveInput() {
  // get audio stream.
  navigator.webkitGetUserMedia({audio: true}, onStream, onStreamError);
}

function onStream(stream) {
  var input = actx.createMediaStreamSource(stream);
  var filter = actx.createBiquadFilter();
  filter.frequency.value = 60.0;
  filter.type = filter.NOTCH;
  filter.Q = 10.0;
  
  var analyser = actx.createAnalyser();
  
  // Connect graph.
  input.connect(filter);
  filter.connect(analyser);
  
  requestAnimationFrame(render);
}

function onStreamError(e) {
  console.error(e);
}

function render() {
  requestAnimationFrame(render);
}