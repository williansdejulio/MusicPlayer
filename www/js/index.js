var platform;
var rootFS;

function gotFS(fileSystem) {
    console.log("got filesystem: "+fileSystem.name); // displays "persistent"
    console.log(fileSystem.root); // displays "/"
    rootFS = fileSystem.root;
}

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
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, function(){
            console.log("error requesting LocalFileSystem");
        });
        /*alert("PENIS2");
        console.log("PENIS2");

        if(!localStorage.previousLogin) {
            localStorage.previousLogin = true;
            window.location.replace("#/create-account");
        } else {
            window.location.replace("#/login");
        }*/
        setTimeout(function (){
            var fileTransfer = new FileTransfer();
            var uri = encodeURI("http://18.228.89.141/upload/Yellow.mp3");
            var fileURL = rootFS.toURL();

            fileTransfer.download(
                uri,
                fileURL,
                function(entry) {
                    console.log("download complete: " + entry.toURL());
                },
                function(error) {
                    console.log(error);
                }
            );
        }, 2000);
        
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
