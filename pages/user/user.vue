<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view :style="{height:bannerHeight+'px'}"></view>
			<view class="avatar">
				<image src="../../static/xxmLogo.png" mode=""></image>
			</view>
			<view class="ip">{{userinfo.IP}}</view>
			<view class="address">来自于：圣何塞</view>
		</view>
		
		<view class="section">
			<view class="list">
				<!-- 我的下载 -->
				<list_row url="/pages/classList/classList?name='我的下载'">
					<template #l-icon>
						<uni-icons type="download-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>我的下载</template>
					<template #r-text>{{userinfo.downloadSize}}</template>
				</list_row>
				<!-- 我的收藏 -->
				<list_row url="/pages/classList/classList?name='我的收藏'">
					<template #l-icon>
						<uni-icons type="star-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>我的收藏</template>
					<template #r-text>{{userinfo.scoreSize}}</template>
				</list_row>
				<!-- 联系客服 -->
				<list_row class="last">
					<template #l-icon>
						<uni-icons type="chatboxes-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>联系客服</template>
					<!-- <template #r-text></template> -->
				</list_row>
					
				<!-- 条件编译：如果在微信小程序页面下显示联系客服 -->
				<!-- #ifdef MP -->
				<button class="contact" open-type="contact">联系客服</button>
				<!-- #endif -->
				
				<!-- 条件编译：如果不在微信小程序页面下显示拨打电话 -->
				<!-- #ifndef MP -->
				<button class="contact" @click="contact">拨打电话</button>
				<!-- #endif -->
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
					<!-- <template #r-text></template> -->
				</list_row>
				<!-- 常见问题 -->
				<list_row class="last">
					<template #l-icon>
						<uni-icons type="flag-filled" size="30" color="rgb(40, 176, 138)"></uni-icons>
					</template>
					<template #l-text>常见问题</template>
					<!-- <template #r-text></template> -->
				</list_row>
			</view>
		</view>
	</view>
	
	<!-- <view class="loadingmore" v-else>
		<view :style="{height:bannerHeight+'px'}"></view>
		<uni-load-more status="loading"></uni-load-more>
	</view> -->
	
</template>

<script setup>
	import {bannerHeight} from '@/utils/system.js'
	import {apiUserInfo} from '@/api/apis.js'
	import {ref} from 'vue'
	
	const userinfo = ref({}) //对象就设置空对象,不至于读不到数据报错
	
	const getUserInfo = async()=>{
		const res = await apiUserInfo()
		userinfo.value=res.data
		console.log(userinfo.value)
	}
	getUserInfo()
	
	const contact = ()=>{
		uni.makePhoneCall({
			phoneNumber: '114' //仅为示例
		});
	}
	const tiaozhuan = ()=>{
		console.log("111")
	}
</script>

<style lang="scss" scoped>
.userLayout{
	.userInfo{
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// padding:200rpx 0 100rpx 0;
		.avatar{
			width:160rpx;
			height:160rpx;
			border:solid 10rpx white;
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
		position:relative;
		.list{
			.last{
				// border:solid 1rpx red;
				border-bottom: 0;
			}
			.contact{
				position:absolute;
				bottom:0;
				height:90rpx;
				width: 100%;
				opacity: 0;
			}
			:deep(){
				.uni-icons{
					color:$base-theme-color !important;
				}
			}
		}
	}
	
	
}
</style>
