const products=[
    {id:1, title:'Product1',quantity:24},
    {id:2, title:'Product2',quantity:5 }, 
    {id:3, title:'Product3',quantity:7}
]





export default class ProductService{
    list(){
        return products
    }

}

export const productService=new ProductService()