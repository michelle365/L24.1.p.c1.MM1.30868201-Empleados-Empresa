class Cl_empleado {
  constructor(n, s) {
    this.nombre = n;
    this.sexo = s;
  }
}

class Cl_empresa {
  constructor() {
    this.contdehombres = 0;
    this.contdemujeres = 0;
    this.contdepersonas = 0;
  }

  procesar(e) {
    this.contdepersonas++;

    if (e.sexo == "M") this.contdehombres++;
    else if (e.sexo == "F") this.contdemujeres++;
  }

  porcentajedemujeres() {
    return (this.contdemujeres / this.contdepersonas) * 100;
  }
}
let empleado1 = new Cl_empleado("Mary", "F");
let empleado2 = new Cl_empleado("Jose", "M");
let empleado3 = new Cl_empleado("Carlos", "M");
let empleado4 = new Cl_empleado("Pedro", "M");

let empresa = new Cl_empresa();
empresa.procesar(empleado1);
empresa.procesar(empleado2);
empresa.procesar(empleado3);
empresa.procesar(empleado4);

let salida = document.getElementById("salida");
salida.innerHTML = `Resultados
<br> Cantidad de hombres que trabajan en la empresa: ${empresa.contdehombres}
<br> Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajedemujeres()}

`;
