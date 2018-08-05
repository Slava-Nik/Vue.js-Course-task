	<template>
	<div class="stocks">
		<action-sell 
			v-for="stock in stockSellList"
			:stock = "stock"
		>
		</action-sell>
		<p v-if="stockSellList.length == 0">There are no available stocks</p>
	</div>
</template>

<script>
		import ActionSell from "./ActionSell.vue";

export default {

  name: 'Stocks',

  computed: {
  	stockSellList: function(){
  		return this.$store.getters.stockPortfolio;
  	}
  },
  components: {
  	"action-sell": ActionSell
  }


}
</script>

<style lang="css" scoped>
	.stocks{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>