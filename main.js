function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(150, 150)
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://drive.google.com/file/d/1qIodYm7PRV2CKx2okuOLrVhkxPSbXRYl/view?usp=sharing',modelLoaded);
    }
    
    function modelLoaded(){
        console.log('Model Loaded!');
    }
    
    function draw() {
       image(video, 0, 0, 300, 300);
       classifier.classify(video, gotResult);
    }
    
    function gotResult(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        }
    }