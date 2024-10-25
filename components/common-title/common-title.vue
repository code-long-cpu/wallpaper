<template>
	<view class="common-title">
		<view class="name">
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.common-title{
	// border: solid 1rpx red;
	margin:30rpx 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	.name{
		font-size: 40rpx;
	}
	.custom{
		// color:rgb(40, 176, 138);
		display: flex;
		align-items: center;
		font-size:35rpx;
	}
	
}
</style>