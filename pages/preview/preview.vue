<template>
	<view class="preview" v-if="currentInfo">
		<!-- 图片预览 -->
		<swiper circular :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in newList" :key="item._id">
				<image @click="maskShow" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
			<!-- v-if="index===currentIndex" -->
		</swiper>

		<!-- 遮罩信息 -->
		<view class="mask" v-show="maskState">
			<view class="goBack" :style="{top:statusBarHeight + 'px'}">
				<uni-icons type="back" size="30" color="#fff" @click="goBack"></uni-icons>
			</view>
			<view class="count">{{currentIndex+1}} / {{newList.length}}</view>
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
					<view class="text">{{currentInfo.score}}</view>
				</view>
				<view class="box" @click="downloadImg">
					<uni-icons type="download" size="30"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>

		<!-- 弹窗信息-壁纸信息 -->
		<uni-popup ref="infoPopup" type="bottom" :safe-area="false">
			<view class="info">
				<view class="info_head">
					<view></view>
					<view class="text">壁纸信息</view>
					<view class="close" @click="closeInfo">
						<uni-icons type="closeempty" size="20"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="lable">壁纸ID：</view>
							<text selectable class="value">{{currentInfo._id}}</text>
						</view>
						<!-- <view class="row">
							<view class="lable">分类：</view>
							<text selectable class="value classify">美女壁纸</text>
						</view> -->
						<view class="row">
							<view class="lable">发布者：</view>
							<text selectable class="value">{{currentInfo.nickname}}</text>
						</view>
						<view class="row">
							<view class="lable">评分：</view>
							<view selectable class="value align">
								<uni-rate :value="currentInfo.score" readonly touchable size="20" />
								<text class="score">{{currentInfo.score}}分</text>
							</view>
						</view>
						<view class="row">
							<view class="lable">摘要：</view>
							<text selectable class="value">{{currentInfo.description}}️️</text>
						</view>
						<view class="row">
							<view class="lable">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in currentInfo.tabs" :key="item">{{item}}</view>
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
		<uni-popup ref="ScorePopup" type="center" :is-mask-click="false">
			<view class="ScoreContent">
				<view class="info_head">
					<view></view>
					<view class="text">{{isScored?'已评过分了~':'壁纸信息'}}</view>
					<view class="close" @click="closeScoreInfo">
						<uni-icons type="closeempty" size="20"></uni-icons>
					</view>
				</view>
				<view class="content">
					<uni-rate size="20" allowHalf v-model="userScore" :disabled="isScored" />
					<text class="score">{{userScore}}分</text>
				</view>
				<view class="footer">
					<button :disabled="!userScore||isScored" @click="clickScore" type="default" size="mini"
						plain>确认评分</button>
				</view>
			</view>
		</uni-popup>

		<!-- 点击下载 -->
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		statusBarHeight
	} from "@/utils/system.js";
	import {
		onLoad
	} from "@dcloudio/uni-app";

	// 桌面信息显示与隐藏
	const maskState = ref(true);
	const maskShow = () => {
		maskState.value = !maskState.value
	}

	// 信息弹窗
	const infoPopup = ref(null)
	const infoPop = () => {
		infoPopup.value.open()
	}
	const closeInfo = () => {
		infoPopup.value.close()
	}

	// 评分弹窗
	const ScorePopup = ref(null)
	const ScorePop = () => {
		if (currentInfo.value.userScore) {
			isScored.value = true
			userScore.value = currentInfo.value.userScore
		}
		ScorePopup.value.open()
	}
	const closeScoreInfo = () => {
		ScorePopup.value.close()
		userScore.value = 0;
		isScored.value = false;
	}
	const userScore = ref(0)
	const isScored = ref(false) //未评过分的状态

	// 评分功能
	import {
		apiSetupScore,
		apiDownLoadWall
	} from "@/api/apis.js"
	const clickScore = async () => {
		uni.showLoading({
			title: "正在评分…"
		})
		console.log("评分了")
		console.log(userScore.value)
		const {
			classid,
			_id: wallId
		} = currentInfo.value
		const res = await apiSetupScore({
			classid,
			wallId,
			userScore: userScore.value
		})
		uni.hideLoading();

		console.log(res)
		if (res.errCode === 0) {
			uni.showToast({
				title: "评分成功！",
				icon: "success"
			})
			newList.value[currentIndex.value].userScore = userScore.value
			uni.setStorage("StrogeList", newList.value)
			closeScoreInfo()
		}
	}
	const goBack = () => {
		uni.navigateBack()
	}

	// 接收并处理预览图片
	const newList = ref([])
	// 获取缓存图片
	const StrogeList = uni.getStorageSync('StrogeList') || []
	// console.log(StrogeList)
	newList.value = StrogeList.map(item => {
		return {
			...item,
			picurl: item.smallPicurl.replace("_small.webp", ".jpg")
		}
	})
	console.log(newList.value)

	// 总图数量为newList.lenght
	// 处理图片显示的索引值index
	const cuerrentId = ref()
	const currentIndex = ref()
	onLoad((e) => {
		console.log(e)
		cuerrentId.value = e.id;
		currentIndex.value = newList.value.findIndex(item => item._id === cuerrentId.value)
		// console.log(Index.value)
		currentInfo.value = newList.value[currentIndex.value]
	})

	// 8.14处理显示当前图片信息,
	const currentInfo = ref(null)
	// 滑块滑动触发change事件拿到索引值current，修改currentindex
	const swiperChange = (e) => {
		currentIndex.value = e.detail.current;
		// console.log(newList.value[currentIndex.value])
		currentInfo.value = newList.value[currentIndex.value]
		console.log(currentInfo.value)
		// console.log(e)
	}

	// 8.12选学搁置,关于减小数据请求

	// 8.16点击下载,弹窗

	const downloadImg = async () => {
		// #ifdef H5
		uni.showModal({
			content: "长按图片保存本地",
			showCancel: false
		})
		// #endif

		// #ifndef H5
		try {
			// 出现加载图
			uni.showLoading({
				title: "加载中…",
				mask: true
			})

			// 发起下载请求
			const {
				classid,
				_id: wallId
			} = currentInfo.value
			const res = await apiDownLoadWall({
				classid,
				wallId
			})
			// 下载操作过于频繁,会请求失败,await请求失败,会跳到catch中
			if (res.errCode != 0) throw res;

			// 下载图片,通过图片地址获取维信下载地址
			uni.getImageInfo({
				src: currentInfo.value.picurl,
				success: (res) => {
					uni.saveImageToPhotosAlbum({
						filePath: res.path,

						//正确保存图片的操作
						success: (res) => {
							uni.showToast({
								title: "保存相册成功，请到相册查看",
								icon: "success"
							})
						},

						//不小心点击了拒绝，二次授权保存相册操作
						fail: (err) => {
							console.log(err) //操作拒绝保存。非正确授权错误
							if (err.errMsg == 'saveImageToPhotosAlbum:fail cancel') {
								uni.showToast({
									title: "图片没有正确保存",
									icon: "none"
								})
								return
							}
							uni.showModal({ //弹出弹窗指引授权操作
								title: '授权提示',
								content: "需要授权保存到相册",
								success: res => {
									if (res.confirm) //点击确定授权
										console.log("确认授权")
									uni.openSetting({ //弹出授权窗口
										success: setting => {
											console.log(
												setting) //接收到设置成功的消息
											if (setting
												.authSetting[
													'scope.writePhotosAlbum'
													] === true) {
												uni.showToast({
													title: "获取授权成功",
													icon: "none"
												})
											} else {
												uni.showToast({ //么有打开权限按钮，提示失败
													title: "获取授权失败",
													icon: "none"
												})
											}

										}
									})
								}
							})
						},
						// 无论图片保存成功还是失败,关闭提示框（也可以不写，因为后面会覆盖前一个，但是showLoading得手动关才行）
						complete: () => {
							uni.hideLoading();
						}
					})
				}
			})
		} catch (err) {
			console.log(err)
			uni.hideLoading()
		}


		// #endif

	}
</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100vh;

			image {
				width: 100%;
				height: 100vh;
			}
		}

		// 屏保信息
		.mask {
			&>view {
				position: absolute;
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
				// border:solid 1rpx white;

			}

			.goBack {
				// position:absolute;
				top: 0;
				left: 30rpx;
				margin-left: 0;
				border: solid 1rpx white;
				width: 38px;
				height: 38px;
				border-radius: 50%;
				background-color: rgba(0, 0, 0, 0.5);
				backdrop-filter: blur(10rpx);
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.count {
				top: 10vh;
				font-size: 30rpx;
				// border:solid 1rpx red;
				padding: 5rpx 20rpx;
				border-radius: 50rpx;
				background: rgba(0, 0, 0, 0.3);
				backdrop-filter: blur(10rpx);
				color: white;

			}

			.time {
				top: calc(10vh + 80rpx);
				font-size: 140rpx;
				text-shadow: 5rpx 5rpx black;
				font-weight: 150;
				// border:solid 1rpx red;
				line-height: 1em;
				color: white;
			}

			.date {
				top: calc(10vh + 230rpx);
				font-size: 40rpx;
				text-shadow: 2rpx 2rpx black;
				color: white;

			}

			.footer {
				bottom: 10vh;
				background-color: rgba(255, 255, 255, 0.8);
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				backdrop-filter: blur(5rpx);
				box-shadow: 2rpx 2rpx 0 black;

				.box {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					// border:solid 1rpx red;
					padding: 3rpx 10rpx;

					.text {
						font-size: 26rpx;
						color: $text-font-color-2;
					}

				}
			}
		}
	}

	// 弹窗消息-壁纸与评分公共样式
	.info_head {
		height: 60rpx;
		// border:solid 1rpx red;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26rpx;
		color: $text-font-color-2;

		.close {
			// border:solid 1rpx red;
			padding: 10rpx;
		}
	}

	// 弹窗消息-壁纸信息
	.info {
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
		padding: 30rpx;
		overflow: hidden;

		scroll-view {
			height: fit-content;

			.content {
				.row {
					padding: 10rpx 0;
					font-size: 30rpx;
					display: flex;
					align-items: center;

					.lable {
						color: $text-font-color-3;
						width: 140rpx;
						text-align: right;

					}

					.value {
						flex: 1;
						// width:0;
						padding-left: 10rpx;

						.score {
							font-size: 30rpx;
							color: $text-font-color-2;
							padding-left: 10rpx;
						}
					}

					.align {
						display: flex;
						align-items: center;

					}

					.tabs {
						display: flex;
						flex-wrap: wrap;
						// border: solid 1rpx $base-theme-color;
						padding: 0rpx;

						.tab {
							border: solid 1rpx $base-theme-color;
							color: $base-theme-color;
							font-size: 25rpx;
							line-height: 1em;
							border-radius: 60rpx;
							padding: 10rpx 30rpx;
							margin: 5rpx;
						}
					}

					.classify {
						color: $base-theme-color;
					}
				}

				.copyright {
					font-size: 30rpx;
					padding: 20rpx;
					background: #f6f6f6;
					color: #666;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}

		}
	}

	.ScoreContent {
		background-color: #fff;
		border-radius: 30rpx;
		padding: 30rpx;
		width: 65vw;

		.content {
			padding: 20rpx 0;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				color: #FFCA3E;
				width: 80rpx;
				padding-left: 10rpx;
				// border:solid 1rpx red;
				text-align: right;
				line-height: 1em;
			}
		}

		.footer {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 20rpx 0;
		}

	}
</style>