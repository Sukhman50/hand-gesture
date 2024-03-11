//https://teachablemachine.withgoogle.com/models/rEQrXeNaQ/

var prediction = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+ data_uri +'">';
    });
}
console.log("The ml5 version is - ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rEQrXeNaQ/model.json',modelLoaded);

function modelLoaded()
{
    console.log("The Model is ready Sir!!!!!!!!!!!!!!!!");
}

function speak()
{
    var synth = window.speechSynthesis;
    speakdata = "the prediction is"+ prediction;
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
}
function check()
{
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
   if (error) {
    console.error("error");
   } else {
    console.log("results");
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
    prediction = results[0].label;
   
if (results[0].label == "best") {
    document.getElementById("update_gesture").innerHTML = "&#128077;";
} 
if (result[0] == "victory") {
    document.getElementById("update_gesture").innerHTML = "&#9996;";
}
if (results[0] == "amazing") {
    document.getElementById("update_gesture").innerHTML = "&#128076;";
}
} 
speak();
}