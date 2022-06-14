function ejecuta() {
  let seleccionOp = parseInt(
    prompt(
      "Seleccionar opciones: \n Ingresa 1: Calcula promedio para los siguientes cinco años (CDMX, México) \n Ingresa 2: Consulta histórico de últimos diez años (CDMX, México) \n Ingresa 3: Salir"
    )
  );

  switch (seleccionOp) {
    case 1:
      promedioCDMX();
      break;

    case 2:
      obtieneTemp(
        parseInt(
          prompt(
            "Ingresa cualquier de estos años: 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012:"
          )
        )
      );
      break;

    case 3:
      break;

    default:
      alert(
        "Valor incorrecto, solo puedes ingresar 1 o 2. Intenta de nuevo..."
      );
      ejecuta();
      break;
  }
}

function promedioCDMX() {
  let anio1 = parseFloat(prompt("Ingresa valor para año 2023"));
  let anio2 = parseFloat(prompt("Ingresa valor para año 2024"));
  let anio3 = parseFloat(prompt("Ingresa valor para año 2025"));
  let anio4 = parseFloat(prompt("Ingresa valor para año 2026"));
  let anio5 = parseFloat(prompt("Ingresa valor para año 2027"));
  alert(
    "El promedio para los siguientes cinco años en Ciudad de México es: " +
      (anio1 + anio2 + anio3 + anio4 + anio5) / 5 +
      " grados centígrados."
  );
}

function obtieneTemp(anio) {
  const resultado = aniosArreglo.find((tem) => tem.anio === anio);
  if (resultado == undefined) {
    alert(
      "Valor incorrecto, solo puedes ingresar años entre 2021 y 2012. Intenta de nuevo..."
    );
    ejecuta();
  } else {
    alert(resultado.temperatura);
  }
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
