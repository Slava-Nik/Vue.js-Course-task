<template>
    <div class="action">
        <div class="panel panel-success">
            <div class="panel-heading">
                <strong class="actionName">{{stock.name}}</strong> <span class="actionInfo">(Price: {{stock.price}})</span>
            </div>
            <div class="panel-body">
                <input v-model="quantity" type="number" placeholder="Quantity" name="actionsToBuy" class="actionQuantityInput form-control">
                <button @click="buyStocks" class="btn btn-success actionButton" :disabled="quantity <= 0 || !Number.isInteger(+quantity) || lackOfFunds">
                    {{lackOfFunds ? "Too big for your budget" : "Buy"}}
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
    methods: {
        buyStocks: function() {
            var order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                stockQuantity: +this.quantity
            }
            this.$store.dispatch('buyStocks', order);
            this.quantity = 0;
        }
    },
    computed: {
        fundsValue: function() {
            return this.$store.getters.fundsValue;
        },
        lackOfFunds: function() {
            return this.stock.price * this.quantity > this.fundsValue;
        }
    }

}
</script>

<style lang="css" scoped>
.action {
    width: 47%;
}

.panel-body {
    display: flex;
}

.actionQuantityInput {
    width: 40%;
}

.actionButton {
    margin-left: auto;
}

.actionInfo {
    font-size: 11px;
}
</style>