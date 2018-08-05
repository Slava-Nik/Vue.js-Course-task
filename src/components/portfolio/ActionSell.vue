<template>
    <div class="action">
        <div class="panel panel-info">
            <div class="panel-heading">
                <strong class="actionName">{{stock.name}}</strong> <span class="actionInfo">(Price: {{stock.price}} | Quantity: {{stock.quantity}})</span>
            </div>
            <div class="panel-body">
              <input v-model="quantity" type="number" placeholder="Quantity" name="actionsToBuy" class="actionQuantityInput form-control">
              <button @click="sellStocks" class="btn btn-danger actionButton" :disabled ="quantity <= 0 || !Number.isInteger(+quantity) || lackOfStocks" >
              {{lackOfStocks ? "Not enough stocks" : "Sell"}}
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'ActionBuy',

    data() {
        return {
          quantity: 0
        }
    },
     props: {
      stock: Object
    },
    computed: {
      lackOfStocks: function() {
          return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      sellStocks: function(){
        var order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          stockQuantity: +this.quantity
        }
        this.$store.dispatch('sellStocks', order);  
        this.quantity = 0;
      }
    }

}
</script>

<style lang="css" scoped>
.action{
  width: 47%;
}

.panel-body{
  display: flex;
}
.actionQuantityInput{
  width: 40%;
}
.actionButton{
  margin-left: auto;
}
 .actionInfo{
  font-size: 11px;
 }
</style>