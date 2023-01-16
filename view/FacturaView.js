//Funciones que pasan al html
var locatorfa = new locatorFactura();
async function insert() {
  // Aqui traemos el numero que contiene el primer input
  let nmfactura = document.getElementById("nmfactura").value;
  // Aqui traemos el numero que contiene el segundo input
  let cdfactura = document.getElementById("cdfactura").value;

  let vendedorDTO = document.getElementById("vendedorDTO").value;
  let clienteDTO = document.getElementById("clienteDTO").value;
  let fefactura = document.getElementById("fefactura").value;

  let vendedorrr = new facturaDTO(nmfactura, cdfactura, vendedorDTO, clienteDTO, fefactura);
  console.log(vendedorrr);
  //Crea una nueva instancia de la clase "locator" y la almacena en la
  //variable "locatorproducto".
  let result = await locatorfa.save(vendedorrr);
  /*Ejecuta el método "save" en "locatorproducto" y le pasa la instancia de la clase "Producto" como argumento. El resultado de la ejecución del método se almacena en la variable "result". */

  getAll();
}

async function update() {
  let nmfactura = document.getElementById("nmfactura").value;
  let cdfactura = document.getElementById("cdfactura").value;
  let vendedorDTO = document.getElementById("vendedorDTO").value;
  let clienteDTO = document.getElementById("clienteDTO").value;
  let fefactura = document.getElementById("fefactura").value;

  let vendedorrr = new facturaDTO(nmfactura, cdfactura, vendedorDTO, clienteDTO, fefactura);
  console.log(vendedorrr);
  let result = await locatorfa.update(vendedorrr);
  console.log(result);
}

async function delet() {
  let nmfactura = document.getElementById("nmfactura").value;
  let vendedorrr = new facturaDTO(nmfactura);
  console.log(vendedorrr);
  let result = await locatorfa.delet(vendedorrr);
}

async function getAll() {
  // let producto = new Producto(nmfactura,cdfactura);
  let ressult = await locatorfa.getAll();
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
    let tdnmfactura = document.createElement("td");
    let trcdfactura = document.createElement("td");

    let trvendedorDTO = document.createElement("td");
    let trclienteDTO = document.createElement("td");
    let trfefactura = document.createElement("td");

    tdnmfactura.innerText = listaDatos[id].nmfactura;
    trcdfactura.innerText = listaDatos[id].cdfactura;
    trvendedorDTO.innerText = listaDatos[id].vendedorDTO.nmvendedor;
    trclienteDTO.innerText = listaDatos[id].clienteDTO.nmcliente;
    trfefactura.innerText = listaDatos[id].fefactura;

    tr.appendChild(tdnmfactura);
    tr.appendChild(trcdfactura);
    tr.appendChild(trvendedorDTO);
    tr.appendChild(trclienteDTO);
    tr.appendChild(trfefactura);
    body.appendChild(tr);
  }
}
