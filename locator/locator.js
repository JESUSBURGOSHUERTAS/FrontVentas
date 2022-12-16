//conexion entre los metodos POST/GET etc.. de Springboot al front  (Bakend->Front)
class locator {
  constructor() {}
  async save(producto) {
    let result = null;

    console.log(JSON.stringify(producto));
    try {
      let response = await fetch("http://localhost:8080/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(producto),
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
      let response = await fetch("http://localhost:8080/api/getall", {
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

  async delet(producto) {
    let result = null;

    try {
      let response = await fetch("http://localhost:8080/api/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(producto),
      });

      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}
