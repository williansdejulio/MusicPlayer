var platform;

var cordovaApp = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('DOMContentLoaded', function () {
            FastClick.attach(document.body);
        }, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        /*alert("PENIS2");
        console.log("PENIS2");

        if(!localStorage.previousLogin) {
            localStorage.previousLogin = true;
            window.location.replace("#/create-account");
        } else {
            window.location.replace("#/login");
        }*/
        
        window.screen.orientation.lock('portrait');

        window.location.replace("#/splash");

        window.setTimeout(function () {
            window.location.replace("#/login");
        }, 2000);

        this.receivedEvent('deviceready');
        platform = device.platform;
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
