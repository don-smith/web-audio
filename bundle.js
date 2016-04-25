(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* globals AudioContext */

var context = new AudioContext();

var foo = exports.foo = {
  play: play
};

function play() {
  var inst = getInstrument();
  var volume = context.createGain();
  inst.connect(volume);
  volume.connect(context.destination);
  inst.start(0);

  setInterval(function () {
    volume.gain.value -= 0.01;
  }, 10);

  setTimeout(function () {
    inst.stop();
    inst.disconnect();
  }, 2500);
}

function getInstrument() {
  var osc = context.createOscillator();
  osc.frequency.value = 440;
  osc.type = 'square';
  return osc;
}

},{}],2:[function(require,module,exports){
'use strict';

var _foo = require('./foo');

document.addEventListener('click', function () {
  _foo.foo.play();
});

},{"./foo":1}]},{},[2]);
