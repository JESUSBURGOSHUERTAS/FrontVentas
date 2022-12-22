class cliente {
  constructor(nmcliente, documento, dsnombres, dsapellidos, dsdireccion) {
    this.nmcliente = nmcliente;
    this.documento = documento;
    this.dsnombres = dsnombres;
    this.dsapellidos = dsapellidos;
    this.dsdireccion = dsdireccion;
  }

  setNmcliente(nmcliente) {
    this.nmcliente = nmcliente;
  }

  getNmcliente(nmcliente) {
    return this.nmcliente;
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
  setDsapellidos(dsapellidos) {
    this.dsapellidos = dsapellidos;
  }

  getDsapellidos(dsapellidos) {
    return this.dsapellidos;
  }
  setDsdireccion(dsdireccion) {
    this.dsdireccion = dsdireccion;
  }

  getDsdireccion(dsdireccion) {
    return this.dsdireccion;
  }
}
