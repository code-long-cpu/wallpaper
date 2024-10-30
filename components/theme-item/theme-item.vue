<template>
	<view class="themeItem">
		<!-- 正常分类 -->
		<navigator class="box" v-if="!isMore" url="/pages/classList/classList">
			<image class = "img" :src="item.picurl" mode="aspectFill"></image>
			<view class="mask">{{item.name}}</view>
			<view class="tab">三天前更新</view>
		</navigator>
		<!-- 更多 -->
		<navigator class="box more" v-if="isMore" url="/pages/classify/classify" open-type="reLaunch">
			<image class = "img" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="30" color="rgba(255,255,255)"></uni-icons>
				<view class="text">更多</view>

			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore:{
			type:Boolean,
			default:false,
		},
		item:{
			type:Object,
			default(){
				return {
					name:"默认名称",
					picurl:"../../common/images/preview1.jpg",
					updateTime:Date.now()-1000*60*60,
				}

			}
		}
	})
</script>

<style lang="scss" scoped>
.themeItem{
	// border:solid 1rpx red;
	.box{
		height:340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position:relative;
		.img{
			// 继承的themeItem尺寸；继承的就是上级的，上级的高度是由grid布局自动的，所以没有显式声明宽度是多少
			width:100%;
			height:100%;
		}
		.mask{
			position:absolute;
			bottom:0;
			left:0;
			height:70rpx;
			width:100%;
			background-color: rgba(0,0,0,0.2);
			backdrop-filter: blur(20rpx);
			display:flex;
			justify-content: center;
			align-items: center;
			color:white;
			font-weight:600;
			font-size: 30rpx;
		}
		.tab{
			position:absolute;
			top:0;
			left:0;
			background-color: rgba(250, 130, 90, 0.6);
			backdrop-filter: blur(10rpx);
			color:white;
			padding:5rpx 20rpx;
			font-size: 2  2rpx;
			border-radius: 0 0 20rpx 0;
		}
	}
	.box.more{
		.mask{
			width:100%;
			height:100%;
			flex-direction: column;
		}
		.text{
			font-size:40rpx;
		}
	}
}
</style>