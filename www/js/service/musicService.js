app.service("musicService", function ($http) {

    this.getSongs = function () {
        
        return new Promise(function (resolve, reject) {
            
            var data = "";
            resolve(data);

            /*
            $http.post(endpoint + "API/Music", data).then(function (response) {
                console.log("SUCCESS FULL CALL: " + response);
                resolve(response);

            }, function (response) {
                console.log("FAILED CALL: " + response);
                reject(response);
            });
            */
        });

    }

});