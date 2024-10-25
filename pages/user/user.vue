<template>
	<view class="userLayout">
		<view class="userInfo">
			<view class="avatar">
				<image src="../../static/xxmLogo.png" mode=""></image>
			</view>
			<view class="ip">100.100.100.100</view>
			<view class="address">来自于：圣何塞</view>
		</view>
		
		<view class="section">
			<view class="list">
				<!-- 我的下载 -->
				<list_row>
					<template #l-icon>
						<uni-icons type="download-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>我的下载</template>
					<template #r-text>0</template>
				</list_row>
				<!-- 我的收藏 -->
				<list_row>
					<template #l-icon>
						<uni-icons type="star-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>我的收藏</template>
					<template #r-text>0</template>
				</list_row>
				<!-- 联系客服 -->
				<list_row class="last">
					<template #l-icon>
						<uni-icons type="chatboxes-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>联系客服</template>
					<template #r-text>0</template>
				</list_row>
			</view>
		</view>
		<view class="section">
			<view class="list">
				<!-- 订阅更新 -->
				<list_row>
					<template #l-icon>
						<uni-icons type="notification-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>订阅更新</template>
					<template #r-text>0</template>
				</list_row>
				<!-- 常见问题 -->
				<list_row class="last">
					<template #l-icon>
						<uni-icons type="flag-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>常见问题</template>
					<template #r-text>0</template>
				</list_row>
			</view>
		</view>
	</view>
	
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding:50rpx 0;
		.avatar{
			width:160rpx;
			height:160rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width:100%;
				height:100%;
			}
		}
		.ip{
			font-size:40rpx;
			color:#333;
			padding:20rpx 0 5rpx;
		}
		.address{
			font-size:30rpx;
			color:#aaa;
		}
	}
	.section{
		margin:50rpx 30rpx;
		border-radius: 10rpx;
		border:solid 1px #eee;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
		.list{
			.last{
				// border:solid 1rpx red;
				border-bottom: 0;
			}
		}
	}
	
	
}
</style>
