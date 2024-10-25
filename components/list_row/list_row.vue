<template>
	<view class="row">
		<class class="left">
			<view>
				<slot name="l-icon"></slot>
			</view> 
			<view class="text">
				<slot name="l-text"></slot>
			</view>
			
		</class>
		<class class="right">
			<view class="text">
				<slot name="r-text" ></slot>
			</view>
			<uni-icons type="forward" size="20" color="#aaa"></uni-icons>
		</class>
	</view>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.row{
		height:90rpx;
		border-bottom: solid 1px #eee;
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0 30rpx;
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
			
	}

</style>