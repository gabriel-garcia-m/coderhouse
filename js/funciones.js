function ejecuta() {
  let seleccionOp = parseInt(
    prompt(
      "Seleccionar opciones: \n Ingresa 1: Calcula promedio para los siguientes cinco años (CDMX, México) \n Ingresa 2: Consulta histórico de últimos diez años (CDMX, México)"
    )
  );

  switch (seleccionOp) {
    case 1:
      promedioCDMX();
      break;

    case 2:
      consultaHistorico(
        parseInt(
          prompt(
            "Ingresa cualquier de estos años: 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2012, 2011:"
          )
        )
      );
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
      (anio1 + anio2 + anio3 + anio4 + anio5) / 5
  );
}

// function validaAnio(anio) {
//   for (const recorreAnio of aniosArreglo) {
//     if (recorreAnio.id.includes(anio)) {
//       alert("test " + recorreAnio.id);
//       return true;
//     }
//   }
// }

function obtieneTemp(anio) {}

function consultaHistorico(anio) {
  if (aniosArreglo.includes(anio)) {
    alert(
      "La temperatura para el año " +
        anio +
        " fue de: " +
        anio +
        " grados centígrados"
    );
  } else {
    alert("Ingresa un año correcto...");
    ejecuta();
  }
}
