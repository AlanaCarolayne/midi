function tocaSom(idElementAudio) {
  const elemento = document.querySelector(idElementAudio);
  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    alert("Elemento não encontrado");
  }
}

// Isto é uma referencia/lista
const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador <= listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  // template string
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  }
}
