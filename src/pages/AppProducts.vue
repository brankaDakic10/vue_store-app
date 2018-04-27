<template>
  <div class="container">
      <h2>Products</h2>

<table class="table table-hover">
<thead class="thead-light">
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Quantity</th>
    
    
    </tr>
</thead>
<tbody>
    <tr v-for="product in products"
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
 import { productService } from '../services/ProductService'
export default {
  data(){
   return{
      products:productService.list(),

     
   }
   }
}
</script>
