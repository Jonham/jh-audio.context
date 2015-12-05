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