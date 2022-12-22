//Funciones que pasan al html
var locatorc = new locatorCliente();
async function insert() {
  // Aqui traemos el numero que contiene el primer input
  let nmcliente = document.getElementById("nmcliente").value;
  // Aqui traemos el numero que contiene el segundo input
  let documento = document.getElementById("documento").value;

  let dsnombres = document.getElementById("dsnombres").value;
  let dsapellidos = document.getElementById("dsapellidos").value;
  let dsdireccion = document.getElementById("dsdireccion").value;

  let Cliente = new cliente(
    nmcliente,
    documento,
    dsnombres,
    dsapellidos,
    dsdireccion
  );
  console.log(Cliente);
  //Crea una nueva instancia de la clase "locator" y la almacena en la
  //variable "locatorproducto".
  let result = await locatorc.save(Cliente);
  /*Ejecuta el método "save" en "locatorproducto" y le pasa la instancia de la clase "Producto" como argumento. El resultado de la ejecución del método se almacena en la variable "result". */

  getAll();
}

async function update() {
  let nmcliente = document.getElementById("nmcliente").value;
  let documento = document.getElementById("documento").value;
  let dsnombres = document.getElementById("dsnombres").value;
  let dsapellidos = document.getElementById("dsapellidos").value;
  let dsdireccion = document.getElementById("dsdireccion").value;

  let Cliente = new cliente(
    nmcliente,
    documento,
    dsnombres,
    dsapellidos,
    dsdireccion
  );
  console.log(Cliente);
  let result = await locatorc.update(Cliente);
  console.log(result);
}

async function delet() {
  let nmcliente = document.getElementById("nmcliente").value;
  let Cliente = new cliente(nmcliente);
  console.log(Cliente);
  let result = await locatorc.delet(Cliente);
}

async function getAll() {
  // let producto = new Producto(nmvendedor,documento);
  let ressult = await locatorc.getAll();
  let data = ressult.data;

  addTable(data);
}

function addTable(listaDatos) {
  let body = document.getElementById("lista_producto_body");
  //Limpia el body lo pone en blanco
  body.innerHTML = null;
  let size = listaDatos.length;
  for (let id = 0; id < size; id++) {
    let tr = document.createElement("tr");
    let tdnmcliente = document.createElement("td");
    let trdocumento = document.createElement("td");

    let trdsnombres = document.createElement("td");
    let trdsapellidos = document.createElement("td");
    let trdsdireccion = document.createElement("td");

    tdnmcliente.innerText = listaDatos[id].nmcliente;
    trdocumento.innerText = listaDatos[id].documento;
    trdsnombres.innerText = listaDatos[id].dsnombres;
    trdsapellidos.innerText = listaDatos[id].dsapellidos;
    trdsdireccion.innerText = listaDatos[id].dsdireccion;

    tr.appendChild(tdnmcliente);
    tr.appendChild(trdocumento);
    tr.appendChild(trdsnombres);
    tr.appendChild(trdsapellidos);
    tr.appendChild(trdsdireccion);
    body.appendChild(tr);
  }
}
