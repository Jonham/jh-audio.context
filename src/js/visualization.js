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
