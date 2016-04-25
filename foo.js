/* globals AudioContext */

const context = new AudioContext()

export let foo = {
  play: play
}

function play () {
  let inst = getInstrument()
  let volume = context.createGain()
  inst.connect(volume)
  volume.connect(context.destination)
  inst.start(0)

  setInterval(function () {
    volume.gain.value -= 0.01
  }, 10)

  setTimeout(function () {
    inst.stop()
    inst.disconnect()
  }, 2500)
}

function getInstrument () {
  const osc = context.createOscillator()
  osc.frequency.value = 220
  osc.type = 'square'
  return osc
}
