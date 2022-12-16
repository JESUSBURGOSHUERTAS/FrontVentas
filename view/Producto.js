//Funciones que pasan al html
var locatorproducto = new locator();
async function insert() {
  let sku = document.getElementById("sku").value;
  let dsproducto = document.getElementById("dsproducto").value;
  let Producto = new producto(sku, dsproducto);
  console.log(Producto);
  let result = await locatorproducto.save(Producto);

  getAll();
}

async function update() {
  let sku = document.getElementById("sku").value;
  let dsproducto = document.getElementById("dsproducto").value;
  let Producto = new producto(sku, dsproducto);
  console.log(Producto);
  let result = await locatorproducto.update(Producto);
  console.log(result);
}

async function delet() {
  let sku = document.getElementById("sku").value;
  let Producto = new producto(sku);
  console.log(Producto);
  let result = await locatorproducto.delet(Producto);
}

async function getAll() {
  // let producto = new Producto(sku,dsproducto);
  let ressult = await locatorproducto.getAll();
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
    let tdsku = document.createElement("td");
    let trdsproducto = document.createElement("td");

    tdsku.innerText = listaDatos[id].sku;
    trdsproducto.innerText = listaDatos[id].dsproducto;

    tr.appendChild(tdsku);
    tr.appendChild(trdsproducto);
    body.appendChild(tr);
  }
}
