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
				<view class="box" @click="ScorePop">
					<uni-icons type="star" size="30"></uni-icons>
					<view class="text">收藏</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="30"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<!-- 弹窗信息-壁纸信息 -->
		<uni-popup ref="infoPopup" type="bottom">
			<view class="info">
				<view class="info_head">
					<view></view>
					<view class="text">壁纸信息</view>
					<view class="close" @click = "closeInfo">
						<uni-icons type="closeempty" size="20"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="lable">壁纸ID：</view>
							<text selectable class="value">48675858674477</text>
						</view>
						<view class="row">
							<view class="lable">分类：</view>
							<text selectable class="value classify">美女壁纸</text>
						</view>
						<view class="row">
							<view class="lable">发布者：</view>
							<text selectable class="value">小咪想吃鱼</text>
						</view>
						<view class="row">
							<view class="lable">评分：</view>
							<view selectable class="value align">
								<uni-rate value="3" readonly touchable size="20"/>
								<text class="score">5分</text>
							</view>
						</view>
						<view class="row">
							<view class="lable">摘要：</view>
							<text selectable class="value">张婧仪一袭金色礼服端庄大气。图源：微博@张婧仪️️</text>
						</view>
						<view class="row">
							<view class="lable">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">标签名</view>
							</view>
						</view>
						<view class="copyright">
							本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸1D举报至平台，邮箱513894357@qg.com，管理将删除侵权壁纸，维护您的权益。
							<!-- <text selectable class="value">️️</text> -->
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<!-- 评分信息 -->
		<uni-popup ref="ScorePopup" type="center">
			<view class="ScoreContent">
				<view class="info_head">
					<view></view>
					<view class="text">壁纸信息</view>
					<view class="close" @click = "closeInfo">
						<uni-icons type="closeempty" size="20"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate value="3" size="20" allowHalf/>
					<text class="score">5分</text>
				</view>
				<view class="footer">
					<button type="default">确认评分</button>
				</view>
				
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	
	// 桌面信息显示与隐藏
	const maskState = ref(true);
	const maskShow = () =>{
		maskState.value = !maskState.value
	}
	
	// 信息弹窗
	const infoPopup = ref(null)
	const infoPop = ()=>{
		infoPopup.value.open()
	}
	const closeInfo = ()=>{
		infoPopup.value.close()
	}
	
	// 评分弹窗
	const ScorePopup=ref(null)
	const ScorePop = ()=>{
		ScorePopup.value.open()
	}
	const closeScoreInfo = ()=>{
		ScorePopup.value.close()
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
	
	// 屏保信息
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

// 弹窗消息-壁纸与评分公共样式
.info_head{
		height:70rpx;
		// border:solid 1rpx red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26rpx;
		color:$text-font-color-2;
		.close{
			// border:solid 1rpx red;
			padding:10rpx;
		}
	}
// 弹窗消息-壁纸信息
.info{
	background-color: #fff;
	border-radius:30rpx 30rpx 0 0;
	padding:30rpx;
	overflow: hidden;
	scroll-view{
		height:fit-content;
		.content{
			.row{
				padding:10rpx 0;
				font-size:30rpx;
				display:flex;
				align-items: center;
				.lable{
					color:$text-font-color-3;
					width:140rpx;
					text-align: right;
					
				}
				.value{
					flex:1;
					// width:0;
					padding-left: 10rpx;
					.score{
						font-size: 30rpx;
						color:$text-font-color-2;
						padding-left: 10rpx;
					}
				}
				.align{
					display:flex;
					align-items: center;
					
				}
				.tabs{
					display:flex;
					flex-wrap: wrap;
					// border: solid 1rpx $base-theme-color;
					padding: 0rpx;
					.tab{
						border: solid 1rpx $base-theme-color;
						color:$base-theme-color;
						font-size: 25rpx;
						line-height: 1em;
						border-radius: 60rpx;
						padding:10rpx 30rpx;
						margin:5rpx;
					}
				}
				.classify{
					color:$base-theme-color;
				}
			}
			.copyright{
				font-size: 30rpx;
				padding:20rpx;
				background: #f6f6f6;
				color:#666;
				border-radius: 10rpx;
				margin:20rpx 0;
				line-height: 1.6em;
			}
		}
		
	}
}
.ScoreContent{
	background-color: #fff;
	border-radius:30rpx;
	padding:30rpx;
	width:60vw;
	.content{
		padding:20rpx 0;
		display: flex;
		justify-content: center;
		align-items: center; 
		text{
			color:#FFCA3E;
			width: 80rpx;
			padding-left: 10rpx;
			// border:solid 1rpx red;
			text-align: right;
			line-height: 1em;
		}
	}
}

</style>
