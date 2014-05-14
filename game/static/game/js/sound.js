var ocargo = ocargo || {};

ocargo.sound = {}

// Stolen from: http://stackoverflow.com/questions/11330917/how-to-play-a-mp3-using-javascript
function Sound(source, initialVolume, loop)
{
    // Create the audio tag
    this.soundFile = document.createElement("audio");
    this.soundFile.preload = "auto";

    // Load the sound file (using a source element for expandability)
    var src = document.createElement("source");
    src.src = source;
    this.soundFile.appendChild(src);
    this.soundFile.volume = initialVolume;

    this.play = function() {
        var self = this;
        setTimeout(function() {
            self.soundFile.pause();
            self.soundFile.currentTime = 0;
            self.soundFile.play();
        }, 1);
    }

    this.setVolume = function(volume) {
        this.soundFile.volume = volume;
    }
};

// *****

ocargo.sound.startingSound = new Sound("/static/game/sound/starting.mp3", 1.0, false);
ocargo.sound.movingSound = new Sound("/static/game/sound/turning.mp3", 1.0, false);
ocargo.sound.winSound = new Sound("/static/game/sound/win.mp3", 1.0, false);
ocargo.sound.failureSound = new Sound("/static/game/sound/failure.mp3", 1.0, false);
ocargo.sound.turningSound = new Sound("/static/game/sound/turning.mp3", 1.0, false);

ocargo.sound.starting = function() {
    console.debug("Playing 'starting' sound.");
    ocargo.sound.startingSound.play();
};

ocargo.sound.moving = function() {
    console.debug("Playing 'moving' sound.");
    ocargo.sound.movingSound.play();
};

ocargo.sound.turning = function() {
    console.debug("Playing 'turning' sound.");
    ocargo.sound.turningSound.play();
};

ocargo.sound.win = function() {
    console.debug("Playing 'win' sound.");
    ocargo.sound.winSound.play();
};

ocargo.sound.failure = function() {
    console.debug("Playing 'failure' sound.");
    ocargo.sound.failureSound.play();
};

ocargo.sound.setAllVolumes = function(volume, loop) {
    ocargo.sound.startingSound.setVolume(volume);
    ocargo.sound.movingSound.setVolume(volume);
    ocargo.sound.winSound.setVolume(volume);
    ocargo.sound.failureSound.setVolume(volume);
    ocargo.sound.turningSound.setVolume(volume);
};
ocargo.sound.mute = function() {
    ocargo.sound.setAllVolumes(0);
};

ocargo.sound.unmute = function() {
    ocargo.sound.setAllVolumes(1.0);
};
