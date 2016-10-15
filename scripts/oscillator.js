    // create web audio api context
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // create Oscillator node
    var oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);

    oscillator.start();

    oscillator.stop(audioCtx.currentTime + 2); // stop 2 seconds after the current time

    var x = 3;