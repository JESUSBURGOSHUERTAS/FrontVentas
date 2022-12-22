//Funciones que pasan al html
var locatorm = new locatorPrecio();
async function insert() {
  // Aqui traemos el numero que contiene el primer input
  let nmprecio = document.getElementById("nmprecio").value;
  // Aqui traemos el numero que contiene el segundo input
  let sku = document.getElementById("sku").value;

  let preciobyid = document.getElementById("precio").value;
  let fedesde = document.getElementById("fedesde").value;
  let fehasta = document.getElementById("fehasta").value;

  let Precioss = new precioDTO(nmprecio, sku, preciobyid, fedesde, fehasta);
  console.log(Precioss);
  //Crea una nueva instancia de la clase "locator" y la almacena en la
  //variable "locatorproducto".
  let result = await locatorm.save(Precioss);
  /*Ejecuta el método "save" en "locatorproducto" y le pasa la instancia de la clase "Producto" como argumento. El resultado de la ejecución del método se almacena en la variable "result". */

  getAll();
}

async function update() {
  let nmprecio = document.getElementById("nmprecio").value;
  let sku = document.getElementById("sku").value;
  let preciobyid = document.getElementById("precio").value;
  let fedesde = document.getElementById("fedesde").value;
  let fehasta = document.getElementById("fehasta").value;

  let Precioss = new precioDTO(nmprecio, sku, preciobyid, fedesde, fehasta);
  console.log(Precioss);
  let result = await locatorm.update(Precioss);
  console.log(result);
}

async function delet() {
  let nmprecio = document.getElementById("nmprecio").value;
  let Precioss = new precioDTO(nmprecio);
  console.log(Precioss);
  let result = await locatorm.delet(Precioss);
}

async function getAll() {
  // let producto = new Producto(nmvendedor,sku);
  let ressult = await locatorm.getAll();
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
