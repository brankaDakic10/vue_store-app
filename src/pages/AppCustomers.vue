<template>
<div class="container mt-4">
<h1>Customers</h1>
<form @submit.prevent='addCustomer'>
    <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" v-model='newCustomer.firstName' class="form-control" id="firstName"  placeholder="Enter first name">
   
  </div>
    <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" v-model='newCustomer.lastName' class="form-control" id="lastName" placeholder="Enter last name">
   
  </div>
 <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" v-model='newCustomer.email' class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
 
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<br>
<table class="table table-hover">
<thead class="thead-light">
    <tr>
    <th>ID</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Email</th>
    <th>&nbsp;</th>
    </tr>
</thead>
<tbody>
    <tr v-for="customer in customers"
                :key=customer.id>
        <td>{{ customer.id }}</td>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td><button @click.prevent='removeCustomer(customer)' class="btn btn-danger">Remove</button></td>
    </tr>
</tbody>
</table>
      

</div>
</template>
<script>
 import { customerService } from '../services/CustomerService'
export default {
 data(){
   return{
      customers:customerService.list(),

      newCustomer:{
       firstName:'',
       lastName:'',
       email:''
      }
   }

 }
 ,
 methods:{
   removeCustomer(customer){
     customerService.delete(customer)
   
   },
   addCustomer(){
      customerService.addCustomer(this.newCustomer)
      

   }
   

 }
}
</script>
