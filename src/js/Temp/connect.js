// 4 Kinds of Nodes
//    1.Souce Nodes:
//    2.Modification nodes:
//    3.Analysis nodes:
//    4.Destination nodes:

// Create the source
var source = context.createBufferSource();
// Create the gain node.
var gain = context.createGain();
// Connect Souce to filter,
// filter to destination
source.connect(gain);
gain.connect(context.destination);
// Graph:
//
// Source   <======X======>  Destination
//      \\                     //
//       ======>  Gain  >=======

// Web Audio API use AudioBuffer 
//      (float number between -1 & 1)
//      (an array of intergers  16-bit: -2^15 to 2^15 -1)