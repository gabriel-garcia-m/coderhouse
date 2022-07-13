const aniosArreglo = [
  { anio: "2021", "temperatura": 23.5 },
  { anio: "2020", "temperatura": 23 },
  { anio: "2019", "temperatura": 22.5 },
  { anio: "2018", "temperatura": 22.4 },
  { anio: "2017", "temperatura": 22.3 },
  { anio: "2016", "temperatura": 22.2 },
  { anio: "2015", "temperatura": 22.1 },
  { anio: "2014", "temperatura": 22 },
  { anio: "2013", "temperatura": 21.5 },
  { anio: "2012", "temperatura": 21 }
];

const tempAnioActual = {mes: 'enero', temperatura: 22}

const cargaAniosTemp = () => {
  let opcionAnio
    aniosArreglo.forEach((element) => {opcionAnio+= `<option value="${element.temperatura}">${element.anio}</option>`});
  return opcionAnio;
};

let valAnuales = []

const urlClima = "http://api.weatherapi.com/v1/current.json?key=fe08f91606de43a1a91231538221207&q=Mexico city&aqi=yes"


