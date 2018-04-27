<template>
  <div>

<h2>App customers</h2>
<div class="list-group">
 <div class="list-group-item"
     v-for="customer  in customers" 
     :key="customer.id">{{customer.firstName}} {{customer.lastName}}
     <div> 
     <button  class="btn" @click="removeCustomer(customer)">Delete</button>
     </div>
 

  </div>

</div>
  </div>
</template>
<script>
 import { customerService } from '../services/CustomerService'
export default {
 data(){
   return{
       customers:customerService.list()
   }

 }
 ,
 methods:{
   removeCustomer(customer){
     customerService.delete(customer)
   
   }

 }
}
</script>
