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