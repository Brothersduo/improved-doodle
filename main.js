Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90

});

    camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/x-pL0PDU2/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded! ');
}
function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence * 100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+ random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+ random_number_b+")";
    }

}