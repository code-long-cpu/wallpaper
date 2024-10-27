<template>
	<view class="preview">
	<!-- 图片预览 -->
		<swiper circular >
			<swiper-item v-for="item in 5">
				<image @click="maskShow" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
	<!-- 遮罩信息 -->
		<view class="mask" v-show="maskState">
			<view class="goBack"></view>
			<view class="count">9 / 12</view>  
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="yyyy年MM月dd"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="infoPop">
					<uni-icons type="info" size="30"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box">
					<uni-icons type="star" size="30"></uni-icons>
					<view class="text">收藏</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="30"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup">底部弹出 Popup</uni-popup>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	const maskState = ref(true);
	
	const maskShow = () =>{
		maskState.value = !maskState.value
	}
	
	const infoPopup = ref(null)
	const infoPop = ()=>{
		infoPopup.value.open()
	}
	
</script>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height:100vh;
	position:relative;
	swiper{
		width: 100%;
		height:100vh;
		image{
			width: 100%;
			height:100vh;
		}
	}
	.mask{
		&>view{
			position:absolute;
			left:0;
			right:0;
			margin: auto;
			width:fit-content;
		}
		.goBack{
			
		}
		.count{
			top:10vh;
			font-size: 30rpx;
			// border:solid 1rpx red;
			padding:5rpx 20rpx;
			border-radius: 50rpx;
			background: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(10rpx);
			color:white;
			
		}
		.time{
			top:calc(10vh + 80rpx);
			font-size: 140rpx;
			text-shadow: 5rpx 5rpx black;
			font-weight: 150;
			// border:solid 1rpx red;
			line-height: 1em;	
			color:white;
		}
		.date{
			top:calc(10vh + 230rpx);
			font-size: 40rpx;
			text-shadow: 2rpx 2rpx black;
			color:white;
			
		}
		.footer{
			bottom:10vh;
			background-color: rgba(255,255,255,0.8);
			width:65vw;
			height:120rpx;
			border-radius: 120rpx;
			display:flex;
			justify-content: space-around;
			align-items: center;
			backdrop-filter: blur(5rpx);
			box-shadow: 2rpx 2rpx 0 black;
				.box{
					display:flex;
					flex-direction: column;
					justify-content: center;
					// border:solid 1rpx red;
					padding:3rpx 10rpx;
					.text{
						font-size:26rpx;
						color:$text-font-color-2;
					}
				}
		}
	}
}

</style>
