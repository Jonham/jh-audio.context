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

var context = new AudioContext();
// to load file through Ajax
function loadSource(url) {
var req = new XMLHttpRequest();
req.open('GET', url, true);
req.responseType = 'arraybuffer';

// Decode asynchronously
req.onload = function() {
  context.decodeAudioData(req.response, function(theBuffer){
    buffer = theBuffer;
  }, onError);
};
req.send();
}
function playSound(buffer) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);// start playing the sound
  
}