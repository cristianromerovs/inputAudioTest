// let mic;

// function setup() {
//     createCanvas(200, 200);
//     mic = new p5.AudioIn();
//     mic.start();
// }

// function draw() {
//     background(0);
//     let vol = mic.getLevel();
//     ellipse(100, 100, vol * 200, vol * 200);
//     console.log(vol);
// }

let audioIn;

function setup(){
  text('getting sources...', 0, 20);
  audioIn = new p5.AudioIn();
  audioIn.getSources(gotSources);
  audioIn.start();
}

function gotSources(deviceList) {
  if (deviceList.length > 0) {
    //set the source to the first item in the deviceList array
    audioIn.setSource(1);
    let currentSource = deviceList[audioIn.currentSource];
    text('set source to: ' + currentSource.deviceId, 5, 20, width);
  }
}

function draw() {
    background(0);
    let vol = audioIn.getLevel();
    ellipse(100, 100, vol * 200, vol * 200);
    console.log(vol);
}