<template>
	<div class="stocks">
		<action-buy 
			v-for="stock in stockBuyList" 
			:stock="stock">
		</action-buy>
	</div>
</template>

<script>
		import ActionBuy from "./ActionBuy.vue";

export default {

  name: 'Stocks',

  computed: {
  	stockBuyList: function(){
  		return this.$store.getters.availableStocks;
  	}
  },
  components: {
  	"action-buy": ActionBuy
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