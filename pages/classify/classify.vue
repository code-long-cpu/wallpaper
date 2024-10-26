<template>
	<view class="classifyLayout pageBg">
		<view class="classify">
			<theme-item v-for="item in 15"></theme-item>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.classify{
	padding:30rpx;
	// border:solid 1px black;
	display: grid;
	gap:15rpx;
	grid-template-columns:repeat(3,1fr);
}
</style>
