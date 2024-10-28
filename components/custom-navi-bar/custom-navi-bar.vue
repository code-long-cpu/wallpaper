<template>
	<view class="customNaviBar">
		<view class="navBar">
			<view class="stateBar"></view>
			<view class="naviBar">
				<text class="text">标题</text>
				<view class="search_area">
					<uni-icons type="search" size="30"></uni-icons>
					<text class="textSearch">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill"></view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.customNaviBar{
	.navBar{
		width:100vw;
		position:fixed;
		left:0;
		top:0;
		z-index: 5;
		.stateBar{
			border:solid 1rpx yellow;
		}
		.naviBar{
			border:solid 1rpx red;
			display: flex;
			// justify-content: center;
			align-items: center;
			padding: 0 30rpx;
			.text{
				font-size: 50rpx;
				font-weight: 500;
			}
			.search_area{
				border:solid 1rpx red;
				display: flex;
				align-items: center;
				width:250rpx;
				border-radius: 50rpx;
				padding-left: 10rpx;
				margin-left: 10rpx;
			}
		}
		
	}
	.fill{
		
	}
}
</style>