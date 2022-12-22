//Funciones que pasan al html
var locatorpr = new LocatorPre();
async function insert() {
  // Aqui traemos el numero que contiene el primer input
  let nmprecio = document.getElementById("nmprecio").value;
  // Aqui traemos el numero que contiene el segundo input
  let sku = document.getElementById("sku").value;

  let precio = document.getElementById("precio").value;
  let fedesde = document.getElementById("fedesde").value;
  let fehasta = document.getElementById("fehasta").value;

  let Precio = new precio(nmprecio, sku, precio, fedesde, fehasta);
  console.log(Precio);
  //Crea una nueva instancia de la clase "locator" y la almacena en la
  //variable "locatorproducto".
  let result = await locatorpr.save(Vendedor);
  /*Ejecuta el método "save" en "locatorproducto" y le pasa la instancia de la clase "Producto" como argumento. El resultado de la ejecución del método se almacena en la variable "result". */

  getAll();
}

async function update() {
  let nmvendedor = document.getElementById("nmvendedor").value;
  let sku = document.getElementById("sku").value;
  let precio = document.getElementById("precio").value;
  let fedesde = document.getElementById("fedesde").value;
  let fehasta = document.getElementById("fehasta").value;

  let Precio = new precio(nmprecio, sku, precio, fedesde, fehasta);
  console.log(Precio);
  let result = await locatorpr.update(Precio);
  console.log(result);
}

async function delet() {
  let nmprecio = document.getElementById("nmprecio").value;
  let Precio = new precio(nmprecio);
  console.log(Precio);
  let result = await locatorpr.delet(Precio);
}

async function getAll() {
  // let producto = new Producto(nmvendedor,sku);
  let ressult = await locatorpr.getAll();
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
    let tdnmprecio = document.createElement("td");
    let trsku = document.createElement("td");

    let trprecio = document.createElement("td");
    let trfedesde = document.createElement("td");
    let trfehasta = document.createElement("td");

    tdnmprecio.innerText = listaDatos[id].nmprecio;
    trsku.innerText = listaDatos[id].sku;
    trprecio.innerText = listaDatos[id].precio;
    trfedesde.innerText = listaDatos[id].fedesde;
    trfehasta.innerText = listaDatos[id].fehasta;

    tr.appendChild(tdnmprecio);
    tr.appendChild(trsku);
    tr.appendChild(trprecio);
    tr.appendChild(trfedesde);
    tr.appendChild(trfehasta);
    body.appendChild(tr);
  }
}
