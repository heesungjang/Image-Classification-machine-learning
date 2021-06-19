let mobilenet;

let puffin;

const modelReady = () => {
    console.log("Model is ready ! ! ! ");
    mobilenet.predict(puffin, gotResults);
};

const gotResults = (error, results) => {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence * 100;
        fill(0);
        textSize(64);

        createP(`best predicted for ${label} with `);
        createP(`Probability of ${prob}%`);
    }
};

const imageReady = () => {
    image(puffin, 0, 0, width, height);
};

function setup() {
    createCanvas(640, 480);
    puffin = createImg("/images/puffin.jpg", imageReady);
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
