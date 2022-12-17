class vendedor {
  constructor(nmvendedor, documento, dsnombres, desapellidos, dsdireccion) {
    this.nmvendedor = nmvendedor;
    this.documento = documento;
    this.dsnombres = dsnombres;
    this.desapellidos = desapellidos;
    this.dsdireccion = dsdireccion;
  }

  setNmvendedor(nmvendedor) {
    this.nmvendedor = nmvendedor;
  }

  getNmvendedor(nmvendedor) {
    return this.nmvendedor;
  }

  setDocumento(documento) {
    this.documento = documento;
  }

  getDocumento(documento) {
    return this.documento;
  }

  setDsnombres(dsnombres) {
    this.dsnombres = dsnombres;
  }

  getDsnombres(dsnombres) {
    return this.dsnombres;
  }
  setDesapellidos(desapellidos) {
    this.desapellidos = desapellidos;
  }

  getdDsapellidos(desapellidos) {
    return this.desapellidos;
  }
  setDsdireccion(dsdireccion) {
    this.dsdireccion = dsdireccion;
  }

  getDsdireccion(dsdireccion) {
    return this.dsdireccion;
  }
}
