let audioIn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  audioIn = new p5.AudioIn();
  audioIn.getSources(gotSources);
  audioIn.start();
  backgroundColor = color(0, 0, 0);
}

function gotSources(deviceList) {
  if (deviceList.length > 0) {
    audioIn.setSource(1);
    //let currentSource = deviceList[audioIn.currentSource];
    //text(currentSource.deviceId, 5, 20, width);
  }
}

let colorChange = 0;
setInterval(function () {
  colorChange++;
  console.log(colorChange);
  if (colorChange > 3) {
    colorChange = 1;
  }
}, 5000);

function draw() {
  let vol = audioIn.getLevel();
  if (colorChange === 1) {
    backgroundColor.setRed(vol * 1000);
    backgroundColor.setGreen(0);
    backgroundColor.setBlue(0);
  } else if (colorChange === 2) {
    backgroundColor.setGreen(vol * 1000);
    backgroundColor.setRed(0);
    backgroundColor.setBlue(0);
  } else if (colorChange === 3) {
    backgroundColor.setBlue(vol * 1000);
    backgroundColor.setRed(0);
    backgroundColor.setGreen(0);
  }
  background(backgroundColor);
  //ellipse(100, 100, vol * 200, vol * 200);
  //rect(300, 200, 300, 200);
}
