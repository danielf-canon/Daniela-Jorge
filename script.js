const sliderInner = document.querySelector(".slider--inner");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let images = sliderInner.querySelectorAll("img");

let index = 0;

setInterval(function () {
  let percentage = index * -100;
  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
}, 5000);

const weddingTime = new Date("August 18 2024 15:00:00");

function updateCountdownTime() {
  const currentTime = new Date();
  const diff = weddingTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? 0 + h : h;
  minutes.innerHTML = m < 10 ? 0 + m : m;
  seconds.innerHTML = s < 10 ? 0 + s : s;
}

setInterval(updateCountdownTime, 1000);

//document.getElementById('song').play();

// Obtener el botón para abrir el modal
var modalBtn = document.querySelector(".modal-dressCode");

// Obtener el modal
var modal = document.getElementById("modal-dressCode");

// Obtener el elemento span que cierra el modal
var closeBtn = document.querySelector(".close");

// Función para abrir el modal
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Función para cerrar el modal al hacer clic en el botón de cerrar
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Función para cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});