const customers=[
    {id:1, firstName:'John',lastName:'Doe',email:'john@gmail',products:[]},
    {id:2, firstName:'Sam',lastName:'Doe',email:'sam@gmail',products:[]},
    {id:3, firstName:'Ann',lastName:'Smith',email:'ann@gmail',products:[]}
]

let nextId = 4
export default class CustomerService{
   
  list(){
     return customers
 }
   delete(customer){
    customers.splice(customers.indexOf(customer),1)
   }
   addCustomer(customer){
       customer.id =nextId
       customers.push(customer)
       nextId++
   }

   get(id){
         return customers.find(customer => customer.id == id)
   }
}

export const customerService=new CustomerService()