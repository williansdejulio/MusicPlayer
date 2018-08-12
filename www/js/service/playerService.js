app.service("playerService", function ($http) {
    var idInterval;
    var aulaNome = "--";
    var cdNome = "--";
    var bpm = 0;

    var sound = new Howl({
        //src: localRootFolder + "/songs/psycho.mp3",
        src: "http://18.228.89.141/upload/sedated.mp3", // MÚSICA START
        html5: true,
        buffer: true,
        onloaderror: function (err) {
            console.log("ERR: " + err);
        }
    });

    this.getSound = function() {
        return sound;
    };
    
    this.getAulaNome = function() { return this.aulaNome; }
    this.getCDNome = function() { return this.cdNome; }
    this.getBpm = function() { return this.bpm; }

    this.setAulaNome = function(aulaNome) { this.aulaNome = aulaNome; }
    this.setCDNome = function(cdNome) { this.cdNome = cdNome; }
    this.setBpm = function(bpm) { this.bpm = bpm; }

    this.isPlaying = function() {
        return sound.playing();
    }
    
    this.getDuration = function() {
        return sound.duration();
    }
    
    this.getPos = function() {
        return sound.seek();
    }
    
    this.setPos = function(seconds) {
        sound.seek(seconds);
    }

    this.changeSrcAndPlay = function (source) {
        sound.unload();
        sound = new Howl({
            src: source,
            html5: true,
            buffer: true,
            onloaderror: function (err) {
                console.log("ERR: " + err);
            }
        });
        sound.play();
    }

    this.togglePlayPause = function() {
        if (sound.playing()) {
            sound.pause();
        } else {
            idSound = sound.play();
        }
        
        return sound.playing();
    }

});