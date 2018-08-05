<template>

    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link :to="{name: 'Home'}" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse" :class="{in: isNavBarOpened}">
                <ul class="nav navbar-nav">
                    <router-link :to="{name: 'Portfolio'}" tag="li" active-class="active"><a href="#">Portfolio</a></router-link>
                    <router-link :to="{name: 'Stocks'}" tag="li" active-class="active"><a href="#">Stocks</a></router-link>
                </ul>

                <ul class="nav navbar-nav navbar-right">

                    <li @click="updateStocks"><a href="#">End Day</a></li>
                    <li @click="isDropdownOpened = !isDropdownOpened" class="dropdown" :class="{open: isDropdownOpened}">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li @click="saveData"><a href="#">Save data</a></li>
                            <li @click="loadData"><a href="#">Load data</a></li>
                        </ul>
                        <li><a href="#"><strong>Funds: {{fundsValue | currency}}</strong></a></li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
import { mapActions } from 'vuex';

export default {

    name: 'appHeader',

    data() {
        return {
            isNavBarOpened: false,
            isDropdownOpened: false
        }
    },
    computed: {
        fundsValue: function() {
            return this.$store.getters.fundsValue;
        }
    },
    methods: {
        ...mapActions({
            "updateStocks": "updateStocksPrices",
            "saveData": "saveStockPrices",
            "loadData": "loadStockPrices"
        })

    }

  }
   
</script>

<style lang="css" scoped>
</style>