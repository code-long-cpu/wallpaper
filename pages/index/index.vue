<template>
	<view class="home pageBg">
		<!-- 自定义公共头部搜索栏 -->
		<custom-navi-bar></custom-navi-bar>
		<!-- tabbar栏目 -->
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay circular>
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode="aspectFill"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 公告栏 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="rgb(40, 176, 138)"></uni-icons>
				<text class="text">通告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item>
						<view class="swiper-item">公告1公告1公告1公告1公告1公告1公告1公告1公告1公告1</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">公告2公告2公告2公告2公告2公告2公告2公告2公告2公告2</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">公告3公告3公告3公告3公告3公告3公告3公告3公告3公告3</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="right"> 
				 <uni-icons type="right" size="16"></uni-icons>
			</view>
		</view>
		
		<!-- 每日推荐 -->
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
					<uni-icons type="calendar" size="18" color="rgb(40, 176, 138)"></uni-icons>
						<uni-dateformat :date="Date.now()" format="dd号"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x class="scroll">
					<view class="box" v-for="item in 10">
						<image class="scroll-img" src="/common/images/classify2.jpg" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 专题精选 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom> 
					<navigator url="">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8" :isMore="false"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.home{
		.banner{
			width:750rpx;
			padding:30rpx 0;
			// border:solid 1rpx red;
			swiper{
				width:750rpx;
				height:340rpx;
				// border:solid 1rpx red;
				swiper-item{
					width:100%;
					height:100%;
					padding:0 30rpx;
					// border:solid 1rpx red;
					image{
						width:100%;
						height:100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.notice{
			// border:solid 1rpx red;
			width:690rpx;
			height:80rpx;
			border-radius: 80rpx;
			background-color: rgb(249, 249, 249);
			margin:0 30rpx;
			display:flex;
			line-height: 80rpx;
			.left{
				width:140rpx;
				height:100%;
				// border:solid 1rpx red;
				display:flex;
				justify-content: center;
				align-items: center;
				:deep(){
					.uni-icons{
						color:$base-theme-color !important;
					}
				}
				.text{
					color:$base-theme-color;
					font-weight:600;
					font-size:30rpx;
				}
			}
			.center{
				flex:1;
				height:100%;
				swiper{
					height:100%;
					swiper-item{
						height:100%;
						color:rgb(114, 114, 114);
						font-size:30rpx;
						view{
							// border:solid 1rpx red;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						
					}
					
				}
				
			}
			.right{
				width:70rpx;
				// border:solid 1rpx red;
				display:flex;
				justify-content: center;
				align-items: center;
			}
		}
		.select{
			width:750rpx;
			.date{
				color:#B3B3B3;
			}
			:deep(){
				.uni-icons{
					color:$base-theme-color !important;
				}
			}
			
			// margin-top:50rpx;
			.content{
				// border:solid 1 rpx red;
				width:720rpx;
				margin-left:30rpx;
				margin-top:30rpx;
				.scroll{
					white-space: nowrap;
					.box{
						display:inline-block;
						width:200rpx;
						height:430rpx;
						margin-right:15rpx;
						.scroll-img{
							width:100%;
							height:100%;
							border-radius: 10rpx;
						}
					}
					.box:last-child{
						margin-right:30rpx;
					}
				}
			}
		}
		.theme{
			// border:solid 1rpx red;
			width:750rpx;
			padding-bottom: 50rpx;
			navigator{
				color:#B3B3B3;
			};
			.content{
				margin:0 30rpx;
				// border:solid 1rpx red;
				display: grid;
				gap:15rpx;
				grid-template-columns: repeat(3,1fr);
			}
			
		}
	}
</style>
