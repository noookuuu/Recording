var media = null;
var src = "recording.mp3"

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(Media);
    var media = new Media(src, onSuccess, onError);
}

//
function recordAudio() {
    var src = "myrecording.amr";
    var media = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

    // Record audio
    media.startRecord();

    mediaTimer = setInterval(function () {
    // get media amplitude
    media.getCurrentAmplitude(
        // success callback
        function (amp) {
            console.log(amp + "%");
        },
        // error callback
        function (e) {
            console.log("Error getting amp=" + e);
        }
    );
}, 1000);
}


        function onSuccess(){
            console.log("Successfully initialize a media file.");
        }

        function onError(error){
            console.log("Failed to initialize a media file. [ Error code: " + error.code + ", Error message: " + error.message + "]");
        }

