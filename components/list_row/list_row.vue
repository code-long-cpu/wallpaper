<template>
	<view class="row">
		<view class="left">
			<view>
				<slot name="l-icon"></slot>
			</view> 
			<view class="text">
				<slot name="l-text"></slot>
			</view>
		</view>
		<view class="right">
			<view class="text">
				<slot name="r-text" ></slot>
			</view>
			<uni-icons type="forward" size="20" color="#aaa"></uni-icons>
		</view>
		<!-- 跳转slot -->
		<view class="navigate">
			<navigator :url="url" class="nav" open-type="reLaunch">跳转</navigator>
		</view>
	</view>
</template>

<script setup>
	defineProps({
		url:{
			type:String,
			default:'',
		}
	})
	
</script>

<style lang="scss" scoped>
	.row{
		// border: solid 1rpx red;
		height:90rpx;
		border-bottom: solid 1px #eee;
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0 30rpx;
		background-color:white;
		positon:relative;
		.left, .right{
			display:flex;
			justify-content: space-between;
			align-items: center;
			padding:10rpx 10rpx;
			.text{
				// border:solid 1rpx red;
				padding-left: 20rpx;
				color:#666;
			}
		}
		.right{
			.text{
				font-size:30rpx;
				color:#aaa;
			}
		}
		.navigate{
			position: absolute;
			height:90rpx;
			width:100%;
			left:0;
			.nav{
				border: solid 1rpx red;
				height:100%;
				width:100%;
				background-color: white;
				opacity: 0;
			}
			
		}
			
	}

</style>