//Funciones que pasan al html
var locatorv = new locatorVendedor();
async function insert() {
  // Aqui traemos el numero que contiene el primer input
  let nmvendedor = document.getElementById("nmvendedor").value;
  // Aqui traemos el numero que contiene el segundo input
  let documento = document.getElementById("documento").value;

  let dsnombres = document.getElementById("dsnombres").value;
  let desapellidos = document.getElementById("desapellidos").value;
  let dsdireccion = document.getElementById("dsdireccion").value;

  let Vendedor = new vendedor(
    nmvendedor,
    documento,
    dsnombres,
    desapellidos,
    dsdireccion
  );
  console.log(Vendedor);
  //Crea una nueva instancia de la clase "locator" y la almacena en la
  //variable "locatorproducto".
  let result = await locatorv.save(Vendedor);
  /*Ejecuta el método "save" en "locatorproducto" y le pasa la instancia de la clase "Producto" como argumento. El resultado de la ejecución del método se almacena en la variable "result". */

  getAll();
}

async function update() {
  let nmvendedor = document.getElementById("nmvendedor").value;
  let documento = document.getElementById("documento").value;
  let dsnombres = document.getElementById("dsnombres").value;
  let desapellidos = document.getElementById("desapellidos").value;
  let dsdireccion = document.getElementById("dsdireccion").value;

  let Vendedor = new vendedor(
    nmvendedor,
    documento,
    dsnombres,
    desapellidos,
    dsdireccion
  );
  console.log(Vendedor);
  let result = await locatorv.update(Vendedor);
  console.log(result);
}

async function delet() {
  let nmvendedor = document.getElementById("nmvendedor").value;
  let Vendedor = new vendedor(nmvendedor);
  console.log(Vendedor);
  let result = await locatorv.delet(Vendedor);
}

async function getAll() {
  // let producto = new Producto(nmvendedor,documento);
  let ressult = await locatorv.getAll();
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
    let tdnmvendedor = document.createElement("td");
    let trdocumento = document.createElement("td");

    let trdsnombres = document.createElement("td");
    let trdesapellidos = document.createElement("td");
    let trdsdireccion = document.createElement("td");

    tdnmvendedor.innerText = listaDatos[id].nmvendedor;
    trdocumento.innerText = listaDatos[id].documento;
    trdsnombres.innerText = listaDatos[id].dsnombres;
    trdesapellidos.innerText = listaDatos[id].desapellidos;
    trdsdireccion.innerText = listaDatos[id].dsdireccion;

    tr.appendChild(tdnmvendedor);
    tr.appendChild(trdocumento);
    tr.appendChild(trdsnombres);
    tr.appendChild(trdesapellidos);
    tr.appendChild(trdsdireccion);
    body.appendChild(tr);
  }
}
