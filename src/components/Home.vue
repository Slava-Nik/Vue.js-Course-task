<template>
	<div class="home">
		<h2>Trade or View your Portfolio</h2>
		<p>You mau Save & Load stocks Data</p>
		<p>Click on 'End day' to begin new Day!</p>
		<hr>
		<p class="funds">Your funds: <span class="funds-count">{{fundsValue | currency}}</span></p>
	</div>
</template>

<script>
export default {

  name: 'Home',

  computed: {
    fundsValue: function(){
      return this.$store.getters.fundsValue;
    }
  }
}
</script>

<style lang="css" scoped>
.home{
	border: 1px solid #ccc;
	padding: 20px;
}
.funds{
	font-size: 21px;
	font-weight: bold;
}
</style>