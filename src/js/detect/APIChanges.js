AudioBufferSourceNode.prototype.noteOn = AudioBufferSourceNode.prototype.start;

AudioBufferSourceNode.prototype.noteGrainOn = AudioBufferSourceNode.prototype.start;

AudioBufferSourceNode.prototype.noteOff = AudioBufferSourceNode.prototype.stop;

AudioContext.prototype.createGainNode = AudioContext.prototype.createGain;

AudioContext.prototype.createDelayNode = AudioContext.prototype.createDelay;

AudioContext.prototype.createJavaScriptNode = AudioContext.prototype.createScriptProcessor;

OscillatorNode.prototype.noteOn = OscillatorNode.prototype.start;
OscillatorNode.prototype.noteOff = OscillatorNode.prototype.stop;

AudioParam.prototype.setTargetValueAtTime = AudioParam.prototype.setTargetAtTime;