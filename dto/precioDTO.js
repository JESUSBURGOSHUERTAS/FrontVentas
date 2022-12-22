class precioDTO {
  constructor(nmprecio, sku, precio, fedesde, fehasta) {
    this.nmprecio = nmprecio;
    this.sku = sku;
    this.precio = precio;
    this.fedesde = fedesde;
    this.fehasta = fehasta;
  }

  setNmprecio(nmprecio) {
    this.nmprecio = nmprecio;
  }

  getNmprecio(nmprecio) {
    return this.nmprecio;
  }

  setSku(sku) {
    this.sku = sku;
  }

  getSku(sku) {
    return this.sku;
  }

  setPrecio(precio) {
    this.precio = precio;
  }

  getPrecio(precio) {
    return this.precio;
  }
  setFedesde(fedesde) {
    this.fedesde = fedesde;
  }

  getFedesde(fedesde) {
    return this.fedesde;
  }
  setFehasta(fehasta) {
    this.fehasta = fehasta;
  }

  getFehasta(fehasta) {
    return this.fehasta;
  }
}
