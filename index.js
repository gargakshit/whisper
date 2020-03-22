let playing = [];

async function play(name) {
  if (playing.filter(p => p.name === name).length === 1) {
    const audio = playing.filter(p => p.name === name)[0].audio;
    await audio.pause();

    playing = playing.filter(p => p.name !== name);

    document.getElementById(name).style.backgroundColor = "beige";
  } else {
    const audio = new Audio(`./sounds/${name}.ogg`);
    audio.loop = true;

    await audio.play();

    playing.push({
      name,
      audio
    });
    document.getElementById(name).style.backgroundColor = "#90ee90";
  }
}

function egg() {
  (function(c) {
    var b = c.getElementsByTagName("head")[0];
    a = c.createElement("script");
    a.type = "text/javascript";
    a.src = unescape(
      "%2F%2Fdl.dropboxusercontent.com%2Fs%2F82526m7wt4vpesr%2Fharlem-shake.js"
    );
    a.async = true;
    b.appendChild(a);
  })(document);
}
