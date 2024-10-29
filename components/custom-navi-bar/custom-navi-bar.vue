<template>
	<view class="customNaviBar">
		<view class="navBar">
			<view class="stateBar" :style="{height:statusBarHeight+'px'}"></view>
			<view class="naviBar" :stytle="{height:titleHeight()+'px'}">
				<text class="text">{{title}}</text>
				<view class="search_area">
					<uni-icons type="search" size="25" color="$font-color"></uni-icons>
					<text class="textSearch">搜索</text>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:bannerHeight+'px'}"></view>
	</view>
</template>

<script setup>
	// import {ref} from 'vue'
	
	// 以下全部打包导出
	// 状态栏高度
	// const SystemInfo = uni.getSystemInfoSync();
	// let statusBarHeight = ref(SystemInfo.statusBarHeight);
	
	// 胶囊按钮高度/标题栏高度
	// const {height,top} = uni.getMenuButtonBoundingClientRect();
	// const titleHeight = ref(height+(top-statusBarHeight)*2)
	
	// banner广告栏高度
	// const bannerHeight=ref(statusBarHeight+height)
	import {statusBarHeight,titleHeight,bannerHeight} from "@/utils/system.js"

	defineProps({
		title:{
			type:String,
			default:"壁纸",
		}
	})

</script>

<style lang="scss" scoped>
.customNaviBar{
	.navBar{
		width:100vw;
		position:fixed;
		left:0;
		top:0;
		z-index: 5;
		background:
		linear-gradient(to bottom,transparent, #fff 400rpx),
		linear-gradient(to left,#FADBD8 20%, #ABEBC6);
		.stateBar{
			// border:solid 1rpx red;
		}
		.naviBar{
			// border:solid 1rpx red;
			display: flex;
			// justify-content: center;
			align-items: center;
			padding: 0 30rpx;
			.text{
				font-size: 50rpx;
				font-weight: 500;
			}
			.search_area{
				border:solid 1rpx white;
				height:50rpx;
				display: flex;
				align-items: center;
				width:250rpx;
				border-radius: 50rpx;
				padding-left: 10rpx;
				margin-left: 10rpx;
				background:rgba(255,255,255,0.4);
				color:#999;
	
			}
		}
	}
	.fill{
		// border:solid 1rpx red;
	}
}
</style>