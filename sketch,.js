let audioIn;

function setup() {
  createCanvas(400, 400);
  audioIn = new p5.AudioIn();
  audioIn.getSources(gotSources);
  audioIn.start();
}

function gotSources(deviceList) {
  if (deviceList.length > 0) {
    audioIn.setSource(1);
    //let currentSource = deviceList[audioIn.currentSource];
    //text(currentSource.deviceId, 5, 20, width);
  }
}

function draw() {
  let vol = (audioIn.getLevel() * 1000).toFixed();
  backgroundColor = color(0, 0, 0);
  backgroundColor.setRed(vol);
  background(backgroundColor);
  //ellipse(100, 100, vol * 200, vol * 200);
  //rect(300, 200, 300, 200);
}
