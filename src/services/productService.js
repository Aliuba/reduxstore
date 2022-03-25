 export class ProductService{
    constructor(httpclient) {
        this.api=httpclient
        this.url="https://fakestoreapi.com/products"
    }
    getProducts(){
        return this.api.get(this.url)
    }
}
