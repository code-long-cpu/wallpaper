<template>
	<view class="classList">
		<view class="content">
			<navigator class="item" v-for="item in ImgList" :key="item._id" url="/pages/preview/preview">
				<image :src="item.smallPicurl" type="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	import {onLoad} from '@dcloudio/uni-app'
	import{apiImgList} from "@/api/apis.js";
	// 封装请求:获取专题内部精选壁纸
	const ImgList = ref([])
	const getImgList = async()=>{
		const res = await apiImgList({
			// classid:"6524a48f6523417a8a8b825d",
			classid:Info.id
			})
		ImgList.value = res.data
		console.log(ImgList.value)
	}
	
	// 创立公共Info变量，接收网址传递来的id和name，给请求方法
	const Info = {}
	// 页面加载onload，获取网址传递来的参数，本页面顺序在setup之后；
	onLoad((e) => {
		console.log(e);
		Info.name=e.name;
		Info.id = e.id;
		console.log(Info);
		// 修改本页分类标题
		uni.setNavigationBarTitle({
			title: Info.name
		})
		// 发起本页面id类型的数据请求
		getImgList()
	}) 
	
</script>

<style lang="scss" scoped>
.classList{
	// border: solid 1rpx red;
	.content{
		display:grid;
		grid-template-columns: repeat(3,1fr);
		gap:5rpx;
		padding: 5rpx;
		// border: solid 5rpx red;
		.item{
			// border: solid 5rpx red;
			height:440rpx;
			image{
				display:block;
				width:100%;
				height:100%;
			}
		}
	}
}
</style>
