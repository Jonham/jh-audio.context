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