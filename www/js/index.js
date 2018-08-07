var media;

var cordovaApp = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        media = new Media("http://www.noiseaddicts.com/samples_1w72b820/3926.mp3")
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        if (localStorage.getItem('primeiro_acesso') != 'true') {
            localStorage.setItem('primeiro_acesso', 'true');
        } 
        /*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        */
    }
};

cordovaApp.initialize();
