class facturaDTO {
  constructor(nmfactura, cdfactura, vendedorDTO, clienteDTO, fefactura) {
    this.nmfactura = nmfactura;
    this.cdfactura = cdfactura;
    this.vendedorDTO = vendedorDTO;
    this.clienteDTO = clienteDTO;
    this.fefactura = fefactura;
  }

  setNmfactura(nmfactura) {
    this.nmfactura = nmfactura;
  }

  getNmfactura(nmfactura) {
    return this.nmfactura;
  }

  setCdfactura(cdfactura) {
    this.cdfactura = cdfactura;
  }

  getCdfactura(cdfactura) {
    return this.cdfactura;
  }

  setVendedorDTO(vendedorDTO) {
    this.vendedorDTO = vendedorDTO;
  }

  getVendedorDTO(vendedorDTO) {
    return this.vendedorDTO;
  }
  setClienteDTO(clienteDTO) {
    this.clienteDTO = clienteDTO;
  }

  getClienteDTO(clienteDTO) {
    return this.clienteDTO;
  }
  setFefactura(fefactura) {
    this.fefactura = fefactura;
  }

  getFefactura(fefactura) {
    return this.fefactura;
  }
}
