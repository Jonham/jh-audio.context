if (window.XMLHttpRequest === undefined) {
	window.XMLHttpRequest = function() {
		try {
			// ActiveX Newest Version
			return new ActiveXObject("Msxml2.XMLHTTP.6.0");
		}
		catch (e1) {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}
			catch (e2) {
				throw new Error("XMLHttpRequest is not supported");
			}
		}
	};
}
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());
// Web Audio API supporting message
//  Chrome:   10-33 with  webkit
//            ^34         AudioContext
//  Opera:    15-21 with  webkit
//  Firefox:  ^25
//  Safari:   ^6    with  webkit
//  Edge:     ^12
//  Mobile: -----------------------
//  Android:  46
//  OperaM:   33
//  ChromeA:  46
//  FirefoxA: 42

window.AudioContext = window.AudioContext || window.webkitAudioContext;

if (window.AudioContext === "undefined") {
  console.error("Do NOT support AudioContext.");
}
// to load file through Ajax
function loadSource(url) {
var req = new XMLHttpRequest();
req.open('GET', url, true);
req.responseType = 'arraybuffer';

// Decode asynchronously
req.onload = function() {
  audioctx.decodeAudioData(req.response, function(theBuffer){
    buffer = theBuffer;
    window.jh = theBuffer;
    console.log("jh is set to buffer");
  }, function(e){console.log('decodeAudioData Error ' + e);});
};
req.send();
}
function playSound(buffer) {
  var source = audioctx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioctx.destination);
  source.start(0);// start playing the sound
  return source;
}
var SMOOTHING = 0.8;
var FFT_SIZE = 2048;

function Visulizer(source) {
  this.analyser = audioctx.createAnalyser();
  
  this.analyser.connect(audioctx.destination);
  this.analyser.minDecibels = -140;
  this.analyser.maxDecibels = 0;
  
  this.freqs = new Uint8Array(this.analyser.frequencyBinCount);
  this.times = new Uint8Array(this.analyser.frequencyBinCount);
  
  this.isPlaying = false;
  this.startTime = 0;
  this.startOffset = 0;
}

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