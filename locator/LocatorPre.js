//conexion entre los metodos POST/GET etc.. de Springboot al front  (Backend->Front)
class locatorPre {
  constructor() {}
  async save(precio) {
    let result = null;

    console.log(JSON.stringify(precio));
    try {
      let response = await fetch("http://localhost:8080/api/precio/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(precio),
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
      let response = await fetch("http://localhost:8080/api/precio/getall", {
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

  async delet(precio) {
    let result = null;

    try {
      let response = await fetch("http://localhost:8080/api/precio/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(precio),
      });

      result = await response.json();
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}
