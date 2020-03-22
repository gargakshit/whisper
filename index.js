let playing = [];

function play(name) {
  if (playing.filter(p => p.name === name).length === 1) {
    const audio = playing.filter(p => p.name === name)[0].audio;
    audio.pause();

    playing = playing.filter(p => p.name !== name);

    document.getElementById(name).style.backgroundColor = "beige";
  } else {
    const audio = new Audio(`./sounds/${name}.ogg`);
    audio.loop = true;

    audio.play();

    playing.push({
      name,
      audio
    });
    document.getElementById(name).style.backgroundColor = "#90ee90";
  }
}
