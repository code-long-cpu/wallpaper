<template>
	<view class="classList">
		<view class="content">
			<navigator url="" class="item" v-for="item in 15">
				<image src="../../common/images/preview2.jpg" type="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.classList{
	// border: solid 1rpx red;
	.content{
		display:grid;
		grid-template-columns: repeat(3,1fr);
		gap:5rpx;
		padding: 5rpx;
		// border: solid 5rpx red;
		.item{
			// border: solid 5rpx red;
			height:440rpx;
			image{
				display:block;
				width:100%;
				height:100%;
			}
		}
	}
}
</style>
