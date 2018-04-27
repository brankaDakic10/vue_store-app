const customers=[
    {id:1, firstName:'John',lastName:'Doe',email:'john@gmail',products:[]},
    {id:2, firstName:'Sam',lastName:'Doe',email:'sam@gmail',products:[]},
    {id:1, firstName:'Ann',lastName:'Smith',email:'ann@gmail',products:[]}
]


export default class CustomerService{
   
  list(){
     return customers
 }
   delete(customer){
    customers.splice(customers.indexOf(customer),1)
   }

}

export const customerService=new CustomerService()