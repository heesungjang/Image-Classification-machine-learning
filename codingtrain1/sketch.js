let mobilenet;
let video;
let label = "";

const modelReady = () => {
    console.log("Model is ready ! ! ! ");
    mobilenet.predict(gotResults);
};

const gotResults = (error, results) => {
    if (error) {
        console.error(error);
    } else {
        label = results[0].label;
        mobilenet.predict(gotResults);
    }
};

// const imageReady = () => {
//     image(puffin, 0, 0, width, height);
// };

function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier("MobileNet", video, modelReady);
}

function draw() {
    background(0);
    image(video, 0, 0);
    fill(255);
    textSize(80);
    text(label, 5, height - 20);
}
