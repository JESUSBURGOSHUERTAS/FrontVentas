//conexion entre los metodos POST/GET etc.. de Springboot al front  (Backend->Front)
class locatorFactura {
  constructor() {}
  async save(facturaDTO) {
    let result = null;
  
    console.log(JSON.stringify(facturaDTO));
    try {
      let vendedorDTO = { "nmvendedor": facturaDTO.vendedorDTO };
      let clienteDTO = { "nmcliente": facturaDTO.clienteDTO };
  
      let data = {
        "nmfactura": facturaDTO.nmfactura,
        "cdfactura": facturaDTO.cdfactura,
        "vendedorDTO": vendedorDTO,
        "clienteDTO": clienteDTO,
        "fefactura": facturaDTO.fefactura
      }
  
      let response = await fetch("http://localhost:8080/api/factura/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
  
      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result;
  }

  async getAll() {
    let result = null;
    try {
      let response = await fetch("http://localhost:8080/api/factura/getall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: null,
      });

      result = await response.json();
    } catch (error) {
      console.error(error);
    }
    return result;
  }

  async delet(facturaDTO) {
    let result = null;

    try {
      let response = await fetch("http://localhost:8080/api/factura/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(facturaDTO),
      });

      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}
