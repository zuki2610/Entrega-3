const heroes = [];
fetch("/db/heroes.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    heroes.push(...data.heroes);
    console.log(heroes);
  })
  .catch(error => console.error(error)); 
const preguntas =  [];

fetch("/db/preguntas.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    preguntas.push(...data.preguntas);
    console.log(preguntas);
  })
  .then (()=>{
    const preguntasContainer = () => {
      let innerHTML = " ";
      preguntas.forEach((pregunta) => {
        console.log(pregunta);
        innerHTML += `
        <div class="">    
            <div class="form-check item item-1">
                <h3>${pregunta.pregunta}</h3>
                <input class="form-check-input" value="${pregunta.valorRespuesta1}"type="radio" name="${pregunta.id}" id="${pregunta.id}-${pregunta.valorRespuesta1}">
                <label class="form-check-label" for="flexRadioDefault1">
                    ${pregunta.respuesta1}
                </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" value="${pregunta.valorRespuesta2}" type="radio" name="${pregunta.id}" id="${pregunta.id}-${pregunta.valorRespuesta2}" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                ${pregunta.respuesta2}
            </label>
          </div>
        </div> 
        `;
      });
      innerHTML += `<button type="button" id="send" class="boton btn btn-danger vibrate-1" onClick="calcular()">Enviar</button>`;
      document.querySelector("#container").innerHTML = innerHTML;
    };
    
    preguntasContainer();
  })
  .catch(error => console.error(error));

const calcular = () => {
  const selectedRadios = document.querySelectorAll(
    `input[type="radio"]:checked`
  );
  let sum = 0;
  selectedRadios.forEach(function (radio) {
    sum += parseInt(radio.value);
  });
  const heroe =  heroes[sum -1];

  const innerHTML = `
<div class="card slide-in-bck-bottom" style="width: 18rem;">
  <img src="${heroe.imagen}" class="card-img-top" alt="blackWidow">
  <div class="card-body">
    <h5 class="card-title">${heroe.nombre}</h5>
    <h6 class="card-subtitle">${heroe.descripcion}</h6>
    <p class="card-text">${heroe.superpoder}</p>
  </div>
</div>`;
document.querySelector("#card").innerHTML = innerHTML;
  console.log(sum);
};


const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', () => {
  swal({
    title: "¿Quieres más diversión?",
    text: "¡Te encantará la página de diversiones!",
    icon: "warning",
    buttons: ["No", "Sí"],
    dangerMode: true,
  })
  .then((willRedirect) => {
    if (willRedirect) {
      window.location.href = "../diversion/diversion.html";
    } else {
      swal("¡Perfecto! ¡Andá pasha bobo!");
    }
  });
});
