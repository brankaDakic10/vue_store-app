<template>
  <div class="container">
      <h2>Products</h2>
     
<form class="text-center">
<input v-model="searchTerm" type="text" placeholder="Search products"/>

</form>
<table class="table table-hover">
<thead class="thead-light">
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Quantity</th>
    
    
    </tr>
</thead>
<tbody>
    <tr v-for="product in filterProducts"
                :key=product.id>
        <td>{{ product.id }}</td>
        <td>{{ product.title }}</td>
        <td>{{ product.quantity }}</td>
       
    </tr>
</tbody>
</table>

  </div>
</template>
<script>
 import { productService } from "../services/ProductService"
export default {
  data(){
   return{
      products:productService.list(),
      searchTerm:""
     
   }
   },
    
 computed:{
   filterProducts(){
       return this.products.filter(product =>{
           return product.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
       })
   }

 }
}
</script>
