function setup() {

    canvas = createCanvas(490, 490);

    canvas.position(520, 240);

    Video = createCapture(VIDEO);

    Video.hide();

}

function draw() {

    image(Video, 0, 0, 490, 490);

    stroke("lime");

    fill("skyblue");

    //top

    circle(0, 0, 80);

    stroke("blue");

    fill("red");

    circle(240, 0, 80);

    stroke("lime");

    fill("skyblue");

    circle(490, 0, 80);

    //left

    stroke("blue");

    fill("red");

    circle(0, 240, 80);

    stroke("lime");

    fill("skyblue");

    circle(0, 480, 80);

    //bottom

    stroke("blue");

    fill("red");

    circle(240, 490, 80);

    stroke("lime");

    fill("skyblue");

    circle(490, 490, 80);

    //right

    stroke("blue");

    fill("red");

    circle(490, 240, 80);

    stroke("yellow");

    fill("orange");

    rect(0, 0, 1000 , 5);

    rect(0, 485, 1000, 5)

}

function TakeSnapshot() {

    save("img.png");

}