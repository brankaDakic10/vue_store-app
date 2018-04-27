<template>
<div class="container mt-4">
<h1>Customers</h1>
<form @submit.prevent="addCustomer" class="text-center">
<input v-model="newCustomer.firstName" type="text" placeholder="First name"/>
<input v-model="newCustomer.lastName" type="text" placeholder="Last name"/>
<input v-model="newCustomer.email" type="email" placeholder="Email"/>
<button class="btn btn-primary">Add new customer</button>
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
