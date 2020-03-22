const data = [
  "Brook",
  "Creek",
  "Stream",
  "CloseWaterfall",
  "DistantWaterfall",
  "CalmShore",
  "Shore",
  "WildShore",
  "OceanWaves",
  "LargeWaves",
  "RainDrops",
  "PouringRain",
  "DistantThunder",
  "CloserThunder",
  "CoastalWind",
  "ForestWind",
  "AutumnBreeze",
  "Birds",
  "Frogs",
  "SummerNight",
  "HeatWave",
  "Bonfire",
  "CoffeeHouse",
  "CocktailVoices",
  "MeditationTime",
  "WindChimes",
  "FanNoise",
  "BrownNoise",
  "PinkNoise",
  "WhiteNoise"
];

const channels = data.map(d => ({
  sound: new Howl({
    src: `./sounds/${d}.ogg`,
    autoplay: false,
    loop: true,
    preload: true
  }),
  name: d,
  playing: false
}));

function init() {}

function play(name) {
  const channel = channels.filter(channel => channel.name === name)[0];

  if (channel.playing) {
    channel.sound.pause();
    channel.playing = false;

    document.getElementById(name).style.backgroundColor = "beige";
  } else {
    document.getElementById(name).style.backgroundColor = "orange";

    channel.sound.play();
    channel.playing = true;

    document.getElementById(name).style.backgroundColor = "#90ee90";
  }
}

function egg() {
  document.getElementById("t").innerHTML = "Sorry I nuked the egg!";
}
