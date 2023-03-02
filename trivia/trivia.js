const heroes = [
    {
        id: 1,
        nombre: "Black Widow",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/blackwidow.jpg",
        descripcion: "Natasha Romanoff, también conocida como Black Widow",
        superpoder: "Natasha es una experta en artes marciales, es una excelente luchadora cuerpo a cuerpo y es una de las mejores espías del mundo. También es una excelente estratega y una gran estratega.",
    },
    {
        id: 2,
        nombre: "Captain America",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/capitan.jpg",
        descripcion: "Steve Rogers, también conocido como Capitán América",
        superpoder: "Steve Rogers es un super soldado, es un excelente luchador cuerpo a cuerpo y es un gran estratega.",
    },
    {
        id: 3,
        nombre: "Hulk",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/hulk.jpg",
        descripcion: "Bruce Banner, también conocido como Hulk",
        superpoder: "Bruce Banner es un científico que se transforma en Hulk cuando se enoja, Hulk es un super soldado, es un excelente luchador cuerpo a cuerpo y es un gran estratega.",
    },
    {
        id: 4,
        nombre: "Iron Man",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/ironman.jpg",
        descripcion: "Iron Man, también conocido como Tony Stark",
        superpoder: "Genio, millonario, playboy, filántropo",
    },
    {
        id: 5,
        nombre: "Loki",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/loki.jpeg",
        descripcion: "Loki, también conocido como Loki Odinson",
        superpoder: "Loki, príncipe de Asgard, hijo de Odín, legítimo rey de. Jotunheim y Dios de las mentiras y el engaño",
    },
    {
        id: 6,
        nombre: "Scarlet Witch",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/scarlet.jpg",
        descripcion: "Wanda Maximoff, también conocida como Scarlet Witch",
        superpoder: "Wanda Maximoff ha demostrado ser capaz de proyectar poderosos campos y escudos de energía mística que puede utilizar para muchos propósitos diferentes.",
    },
    {
        id: 7,
        nombre: "Star Lord",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/starlord.jpg",
        descripcion: "Peter Quill, también conocido como Star-Lord",
        superpoder: "Peter Quill es un experto en combate cuerpo a cuerpo, un experto en artes marciales, un experto en combate a distancia y un experto en combate aéreo.",
    },
    {
        id: 8,
        nombre: "Doctor Strange",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/strange.jpg",
        descripcion: "Stephen Strange, también conocido como Doctor Strange",
        superpoder: "Stephen Strange es un mago, un hechicero, un médico y un cirujano.",
    },
    {
        id: 9,
        nombre: "Thor",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/thor.jpg",
        descripcion: "Thor Odinson, también conocido como Thor",
        superpoder: "Thor es un super soldado, es un excelente luchador cuerpo a cuerpo Dios del trueno.",
    },
    {
        id: 10,
        nombre: "Thanos",
        imagen: "https://raw.githubusercontent.com/zuki2610/Entrega-1/main/assets/thanos.jpg",
        descripcion: "Thanos, también conocido como Thanos el Titán Loco",
        superpoder: "Thanos posee una enorme fuerza, velocidad, reflejos, aglidad, resistencia, durabilidad sobrehumana, invulnerabilidad e inmortalidad.",
    },
]
const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué prefieres?",
    respuesta1: "Cumplir con las leyes y ser correcto",
    valorRespuesta1: 2,
    respuesta2: "¿Qué es la ley? No hay nada que me detenga",
    valorRespuesta2: 1,
  },
  {
    id: 2,
    pregunta: "En situaciones de peligro...",
    respuesta1: "Pienso razonablemente antes de actuar",
    valorRespuesta1: 2,
    respuesta2: "Actúo sin pensar y sigo mi instinto",
    valorRespuesta2: 1,
  },
  {
    id: 3,
    pregunta: "¿Mentir o Decir la verdad?",
    respuesta1: "Decir la verdad",
    valorRespuesta1: 2,
    respuesta2: "Mentir no está tan mal",
    valorRespuesta2: 1,
  },
  {
    id: 4,
    pregunta: "Si se trata de tomar la iniciativa...",
    respuesta1: "Soy un lider nato",
    valorRespuesta1: 2,
    respuesta2: "Prefiero esperar a que otros tomen la iniciativa",
    valorRespuesta2: 1,
  },
  {
    id: 5,
    pregunta: "¿Lobo solitario? o ¿O amigos por siempre?",
    respuesta1: "Necesito mi espacio",
    valorRespuesta1: 2,
    respuesta2: "Prefiero estar rodeado de amigos",
    valorRespuesta2: 1,
  },
];
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
