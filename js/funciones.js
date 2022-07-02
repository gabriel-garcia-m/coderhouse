//Función principal que controla flujo
function ejecuta() {
  //Manejo de eventos
  let btnPromedio = document.getElementById("btnprom");
  btnPromedio.onclick = () => {
    promedioCDMX();
    localStorage.removeItem("Panchito");
  };

  let btnConsulta = document.getElementById("btnhist");
  btnConsulta.onclick = () => {
    obtieneTemp();
  };

  let btnCelcius = document.getElementById("btncelcius");
  btnCelcius.onclick = () => {
    celciusFahrenheit(
      parseFloat(
        prompt("Convierte grados Celcius a Fahrenheit - ingresa valor:")
      )
    );
  };

  let btnFah = document.getElementById("btnfahrenheit");
  btnFah.onclick = () => {
    fahrenheitCelcius(
      parseFloat(
        prompt("Convierte grados Fahrenheit a Celcius - ingresa valor:")
      )
    );
  };
  // let seleccionOp = parseInt(
  //   prompt(
  //     "Seleccionar opciones: \n Ingresa 1: Calcula promedio para los siguientes cinco años (CDMX, México) \n Ingresa 2: Consulta histórico de últimos diez años (CDMX, México) \n Ingresa 3: Convierte grados Celcius a Fahrenheit \n Ingresa 4: Convierte grados Fahrenheit a Celcius \n Ingresa 5 para salir"
  //   )
  // );

  // switch (seleccionOp) {
  //   case 1:
  //     promedioCDMX();
  //     break;

  //   case 2:
  //     obtieneTemp(
  //       parseInt(
  //         prompt(
  //           "Ingresa cualquier de estos años: 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012:"
  //         )
  //       )
  //     );
  //     break;

  //   case 3:
  // celciusFahrenheit(
  //   parseFloat(
  //     prompt("Convierte grados Celcius a Fahrenheit - ingresa valor:")
  //   )
  // );
  //     break;

  //   case 4:
  // fahrenheitCelcius(
  //   parseFloat(
  //     prompt("Convierte grados Fahrenheit a Celcius - ingresa valor:")
  //   )
  // );

  //     break;

  //   case 5:
  //     break;

  //   default:
  //     alert(
  //       "Valor incorrecto, solo puedes ingresar 1, 2, 3, 4 o 5. Intenta de nuevo..."
  //     );
  //     ejecuta();
  //     break;
  // }
}

//Función para calcular promedio
function promedioCDMX() {
  let despliegaRes = document.getElementById("contenido");
  function recuperoPromedios() {
    // debugger
    let promStorage = 0;
    if ((promStorage = localStorage.getItem("contenedor"))) {
      let test = JSON.parse(promStorage);
      // alert(test)
      despliegaRes.innerHTML =
        "<form><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2023</label><input type='number' class='form-control' id='an2023' value=" +
        test[0] +
        "></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2024</label><input type='number' class='form-control' id='an2024' value=" +
        test[1] +
        "></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2025</label><input type='number' class='form-control' id='an2025' value=" +
        test[2] +
        "></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2026</label><input type='number' class='form-control' id='an2026' value=" +
        test[3] +
        "></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2027</label><input type='number' class='form-control' id='an2027' value=" +
        test[4] +
        "></input></div><button id='btnprejecuta' type='button' class='btn btn-dark'>Ejecuta</button></form>";
    } else {
      despliegaRes.innerHTML =
        "<form><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2023</label><input type='number' class='form-control' id='an2023'></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2024</label><input type='number' class='form-control' id='an2024'></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2025</label><input type='number' class='form-control' id='an2025'></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2026</label><input type='number' class='form-control' id='an2026'></input></div><div class='mb-3'><label for='an1' class='form label'>Ingresa valor para 2027</label><input type='number' class='form-control' id='an2027'></input></div><button id='btnprejecuta' type='button' class='btn btn-dark'>Ejecuta</button></form>";
    }
  }
  recuperoPromedios();
  const btnEjecutaPromedio = document.querySelector("#btnprejecuta");
  btnEjecutaPromedio.addEventListener("click", () => {
    const anVal2023 = document.querySelector("#an2023");
    const anVal2024 = document.querySelector("#an2024");
    const anVal2025 = document.querySelector("#an2025");
    const anVal2026 = document.querySelector("#an2026");
    const anVal2027 = document.querySelector("#an2027");

    if (
      anVal2023.value === "" ||
      anVal2024.value === "" ||
      anVal2025.value === "" ||
      anVal2026.value === "" ||
      anVal2027.value === ""
    ) {
      alert("Ingresa todos los años y/o solo números.");
    } else {
      valAnuales = [
        anVal2023.value,
        anVal2024.value,
        anVal2025.value,
        anVal2026.value,
        anVal2027.value,
      ];
      const valAnualesJSON = JSON.stringify(valAnuales);
      localStorage.setItem("contenedor", valAnualesJSON);
      const promCiudad = new TemperaturaPromedio(
        anVal2023.value,
        anVal2024.value,
        anVal2025.value,
        anVal2026.value,
        anVal2027.value
      );
      despliegaRes.innerHTML +=
        " <br><strong>Resultados</strong><div> El promedio para los siguientes cinco años en Ciudad de México es de: <strong>" +
        promCiudad.calculaPromedio() +
        "</strong> grados centígrados. </div>";
    }
  });
  
  // let anio1 = parseFloat(prompt("Ingresa valor para año 2023"));
  // let anio2 = parseFloat(prompt("Ingresa valor para año 2024"));
  // let anio3 = parseFloat(prompt("Ingresa valor para año 2025"));
  // let anio4 = parseFloat(prompt("Ingresa valor para año 2026"));
  // let anio5 = parseFloat(prompt("Ingresa valor para año 2027"));
  // alert(
  //   "El promedio para los siguientes cinco años en Ciudad de México es: " +
  //     (anio1 + anio2 + anio3 + anio4 + anio5) / 5 +
  //     " grados centígrados."
  // );

  //Modificacion dinamica de DOM
  // despliegaRes.innerHTML =
  //   "<strong>Resultados</strong><div> El promedio para los siguientes cinco años en Ciudad de México es de: <strong>" +
  //   (anio1 + anio2 + anio3 + anio4 + anio5) / 5 +
  //   "</strong> grados centígrados. </div>";

  // ejecuta()
}

//Función para obtener temperatura histórica, utilizando funciones de orden superior y arreglo de objetos
function obtieneTemp() {
  let despliegaRes = document.getElementById("contenido");
  despliegaRes.innerHTML =
    "<select id='seleccion' class = 'form-select'><option selected>Selecciona anio</option>" +
    cargaAniosTemp() +
    "</select>";

  let selDinamica = document.getElementById("seleccion");
  selDinamica.onchange = () => {
    despliegaRes.innerHTML +=
      "<strong>Resultados</strong> <table class='table border'> <thead class='border'> <tr> <th scope='col'>Año</th> <th scope='col'>Temperatura promedio</th> </tr></thead><tbody><tr><th scope='row'>" +
      selDinamica.options[selDinamica.selectedIndex].text +
      "</th><td>" +
      selDinamica.value +
      " grados Celcius</td></tr></tbody></table>";

    selDinamica.selectedIndex = 0;
  };
  descomponeArreglo()
  // document.querySelector('#seleccion').addEventListener("change", function() {
  //   despliegaRes.innerHTML += "<div>"+ this.value+"</div>"
  // });

  // const resultado = aniosArreglo.find((tem) => tem.anio === anio);
  // if (resultado == undefined) {
  //   alert(
  //     "Valor incorrecto, solo puedes ingresar años entre 2021 y 2012. Intenta de nuevo..."
  //   );
  //   ejecuta();
  // } else {
  //   let despliegaRes = document.getElementById("contenido");
  //   despliegaRes.innerHTML =
  //     "<strong>Resultados</strong> <table class='table border'> <thead class='border'> <tr> <th scope='col'>Año</th> <th scope='col'>Temperatura promedio</th> </tr></thead><tbody><tr><th scope='row'>" +
  //     anio +
  //     "</th><td>" +
  //     resultado.temperatura +
  //     " grados Celcius</td></tr></tbody></table>";
  //   // alert("La temperatura en el año " + anio+ " fue de " + resultado.temperatura + " grados Celcius");
  //   // ejecuta()
  // }
  
}

// function consultaHistorico(anio) {
//   switch (anio) {
//     case 2021:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 23 grados centígrados"
//       );
//       break;

//     case 2020:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 22 grados centígrados"
//       );
//       break;

//     case 2019:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 21 grados centígrados"
//       );
//       break;

//     case 2018:
//       alert(
//         "La temperatura promedio  para el año " +
//           anio +
//           " fue de: 21.5 grados centígrados"
//       );
//       break;

//     case 2017:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 21.4 grados centígrados"
//       );
//       break;

//     case 2016:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 21.3 grados centígrados"
//       );
//       break;

//     case 2015:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 21.2 grados centígrados"
//       );
//       break;

//     case 2014:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 21.1 grados centígrados"
//       );
//       break;

//     case 2013:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 20.5 grados centígrados"
//       );
//       break;

//     case 2012:
//       alert(
//         "La temperatura promedio para el año " +
//           anio +
//           " fue de: 20 grados centígrados"
//       );
//       break;

//     default:
//       alert(
//         "Valor incorrecto, solo puedes ingresar años entre 2021 y 2012. Intenta de nuevo..."
//       );
//       ejecuta();
//       break;
//   }
// }

//Función para convertir grados Celcius a Fahrenheit
function celciusFahrenheit(temperatura) {
  if (isNaN(temperatura)) {
    alert("Ingresa un número...");
    ejecuta();
  } else {
    // alert(
    //   temperatura +
    //     " grados Celcius a Fahrenheit son: " +
    //     (temperatura * 1.8 + 32).toFixed(2) +
    //     " grados"
    // );
    // ejecuta();
    let despliegaRes = document.getElementById("contenido");
    despliegaRes.innerHTML =
      "<strong>Resultados</strong> <table class='table border'> <thead class='border'> <tr> <th scope='col'>Valor ingresado (Celcius)</th> <th scope='col'>Conversión a Fahrenheit</th> </tr></thead><tbody><tr><th scope='row'>" +
      temperatura +
      "</th><td>" +
      (temperatura * 1.8 + 32).toFixed(2) +
      " grados </td></tr></tbody></table>";
  }
}

//Función para convertir grados Fahrenheit a Celcius
function fahrenheitCelcius(temperatura) {
  if (isNaN(temperatura)) {
    alert("Ingresa un número...");
    ejecuta();
  } else {
    // alert(
    //   temperatura +
    //     " grados Fahrenheit a Celcius son: " +
    //     ((temperatura - 32) / 1.8).toFixed(2) +
    //     " grados"
    // );
    // ejecuta();
    let despliegaRes = document.getElementById("contenido");
    despliegaRes.innerHTML =
      "<strong>Resultados</strong> <table class='table border'> <thead class='border'> <tr> <th scope='col'>Valor ingresado (Fahrenheit)</th> <th scope='col'>Conversión a Celcius</th> </tr></thead><tbody><tr><th scope='row'>" +
      temperatura +
      "</th><td>" +
      ((temperatura - 32) / 1.8).toFixed(2) +
      " grados </td></tr></tbody></table>";
  }
}


//Practica de uso de librerias >> SweetAlert
const mensajeTostada = (texto,duracion)=> {
  Swal.fire({
    icon: 'info',
    title: texto,
    position: 'top',
    showConfirmButton: false,
    toast: true,
    timer: duracion,
    imageUrl: 'img/weather.jpg',
    imageWidth: 400,
    imageHeight: 200,
    
  })
}

//Practica de desestructuracion de arreglo
function descomponeArreglo(){
  const {mes, temperatura} = tempAnioActual
  let mensajeT = 'Dato curioso: La temperatura en Ciudad de Mexico, anio 2022 para el mes de '+ mes+' fue de: ' + temperatura + ' grados centigrados.'
  mensajeTostada(mensajeT,5000)
  
}