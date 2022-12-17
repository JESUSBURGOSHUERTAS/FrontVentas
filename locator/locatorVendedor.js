//conexion entre los metodos POST/GET etc.. de Springboot al front  (Bakend->Front)
class locatorVendedor {
  constructor() {}
  async save(vendedor) {
    let result = null;

    console.log(JSON.stringify(vendedor));
    try {
      let response = await fetch("http://localhost:8080/api/vendedor/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(vendedor),
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
      let response = await fetch("http://localhost:8080/api/vendedor/getall", {
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

  async delet(vendedor) {
    let result = null;

    try {
      let response = await fetch("http://localhost:8080/api/vendedor/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(vendedor),
      });

      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}
