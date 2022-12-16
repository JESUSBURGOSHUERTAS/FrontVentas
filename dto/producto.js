class producto{

    constructor(sku,dsproducto){
        this.sku = sku
        this.dsproducto =dsproducto
    }

    setSku(sku){
        this.sku = sku
    }

    getSku(sku){
        return this.sku
    }

    setDsproducto(dsproducto){
        this.dsproducto = dsproducto
    }

    getDsproducto(dsproducto){
        return this.dsproducto
    }
}