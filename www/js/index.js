var platform;
var rootFS;
var db;

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

        var fileTransfer = new FileTransfer();
        var uri = encodeURI("http://18.228.89.141//upload/Tove Lo - Habits (Stay High)[1].mp3");
        var fileURL = cordova.file.externalApplicationStorageDirectory + "/edu0/Ahjklswe123sdfs.dat";

        /*fileTransfer.onprogress = function(progressEvent) {
            if (progressEvent.lengthComputable) {
                loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
            } else {
                loadingStatus.increment();
            }
            // FUNCIONA
            console.log(progressEvent.loaded / progressEvent.total);
        };*/

        fileTransfer.download(
            uri,
            fileURL,
            function(entry) {
                alert("download complete: " + entry.toURL());
            },
            function(error) {
                alert("download error:" + error.target);
                // TRATAR ISSO AQUI DEPOIS
            }
        );
        
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
        
        if (localStorage.getItem('primeiro_acesso_app') != 'true') {
            localStorage.setItem('primeiro_acesso_app', 'true');
            createDatabase();
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

function dbOpen() {
    db = window.openDatabase("paulodj_app", "1.0", "Paulo DJ App", 100000);
}

function createDatabase() {
    debugger;
    if (db == null) {
        dbOpen();
    }

    db.transaction(function (tx) {
        tx.executeSql(
            "CREATE TABLE AULA(" +
            "ID_AULA INTEGER PRIMARY KEY AUTOINCREMENT, " +
            "ID_AULA_EXTERNO INT, " +
            "NOME VARCHAR(255), " +
            "ID_CD INT, " +
            "BPM FLOAT, " +
            "ARQUIVO VARCHAR(1023), " +
            "ATIVO BIT, " +
            "BAIXADO BIT" + // <<< CAMPO CUSTOM
            ")");
    }, errorCB);

    db.transaction(function (tx) {
        tx.executeSql(
            "CREATE TABLE CD(" +
            "ID_CD INTEGER PRIMARY KEY AUTOINCREMENT," +
            "NOME VARCHAR(255)," +
            "DURACAO INT," +
            "IMAGEM VARCHAR(1023)," +
            "ATIVO BIT" +
            ")"
        );
    }, errorCB);
    
    db.transaction(function (tx) {
        tx.executeSql(
            "CREATE TABLE CLIENTE(" +
            "ID_CLIENTE INTEGER PRIMARY KEY AUTOINCREMENT," +
            "NOME VARCHAR(255)," +
            "TOKEN VARCHAR(255)," +
            "EMAIL VARCHAR(255)," +
            "CELULAR VARCHAR(30)," +
            "LOGIN VARCHAR(255)," +
            "SENHA VARCHAR(255)," +
            "DATA_ENTRADA DATETIME," +
            "DATA_EXPIRACAO DATETIME," +
            "ATIVO BIT," +
            "LOGADO BIT" +
            ")"
        );
    }, errorCB);

}

function errorCB(err) {
    alert('Erro SQL: ' + err.message);
    console.log(err);
}