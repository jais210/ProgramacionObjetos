function Pasajeros(nombres, apellidos, dni) {
  this.nombres = nombres;
  this.apellidos = apellidos;
  this.dni = dni;

  var html = "";
  html += this.nombres + " - ";
  html += this.apellidos + " -> ";
  html += this.dni;
  return html;
}

function Bus() {
  this.pasajeros = [];
  this.numeroAsiento = -1;
  this.inicio = function() {
    for (var i = 0; i < 32; i++) {
      this.pasajeros[i] = undefined;
    }
  };
  this.buscar = function() {
    for (var i = 0; i < 32; i++) {
      if (this.pasajeros[i] != undefined && this.pasajeros[i].dni == ingreso) {
        document.getElementById("nombre").value = this.pasajeros[i].nombre;
        document.getElementById("apellido").value = this.pasajeros[i].apellido;
        document.getElementById("dni").value = this.pasajeros[i].dni;
      }
    }
  };
  this.reservar = function() {
    var nombres = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    this.pasajeros[numeroAsiento - 1] = new Pasajeros(nombres, apellidos, dni);

    alert("registrado");
    limpiar();
    console.log(pasajeros);
  };
  this.limpiar = function() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";
  };
  this.mostrarLista = function() {
    var lista = [];

    for (var i = 0; i < 32; i++) {
      if (pasajeros[i] != undefined) {
        var mostrarLista = document.getElementById("mostrarLista");
        lista +=
          "<br> El pasajero es " +
          pasajeros[i].nombre +
          " " +
          pasajeros[i].apellido +
          ", " +
          "<br> su número de DNI es " +
          pasajeros[i].dni +
          "<br>";

        mostrarLista.innerHTML = lista;
      }
    }
  };
}

// var asientos = document.getElementsByTagName("td");

// var pasajeros = new Array(32);
// for (var i = 0; i < 32; i++) {
//   pasajeros[i] = undefined;
// }

// for (var i = 0; i < asientos.length; i++) {
//   asientos[i].addEventListener("click", redirect, false);
// }

// function redirect(event) {
//   numeroAsiento = event.target.textContent;
//   event.target.style.backgroundColor =
//     event.target.style.backgroundColor == "rgb(248, 237, 80)"
//       ? "transparent"
//       : "#F8ED50";
// }

// function cancelar() {
//   pasajeros[numeroAsiento - 1] = undefined;
//   alert("asiento cancelado");
//   numeroAsiento = event.target.textContent;
//   event.target.style.backgroundColor = "transparent";
// }
