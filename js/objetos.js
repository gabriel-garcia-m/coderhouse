//Objeto promedio

class TemperaturaPromedio{
    constructor(a1,a2,a3,a4,a5){
        this.anio2023 = a1
        this.anio2024 = a2
        this.anio2025 = a3
        this.anio2026 = a4
        this.anio2027 = a5
    }
    calculaPromedio(){
        let resProm = (parseFloat(this.anio2023) + parseFloat(this.anio2024) + parseFloat(this.anio2025) + parseFloat(this.anio2026) + parseFloat(this.anio2027)) / 5
        return resProm.toFixed(2)
    }

}