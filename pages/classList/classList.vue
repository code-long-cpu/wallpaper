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
	import {onLoad,onReachBottom} from '@dcloudio/uni-app'
	import{apiImgList} from "@/api/apis.js";
	
	// 创立公共Info变量，接收网址传递来的id和name，给请求方法
	const Info = {
		pageNum:1,
		pageSize:12
	}
	const noData = ref(false)
	// 封装请求:获取专题内部精选壁纸
	const ImgList = ref([])
	const getImgList = async()=>{
		const res = await apiImgList(Info)
		ImgList.value = [...ImgList.value, ...res.data]
		if(Info.pageSize>res.data.length) noData.value=true;
		console.log(res.data)
	}
	
	
	// 页面加载onload，获取网址传递来的参数，本页面顺序在setup之后；
	onLoad((e) => {
		console.log(e);
		Info.name=e.name;
		Info.classid = e.id;
		// console.log(Info);
		// 修改本页分类标题
		uni.setNavigationBarTitle({
			title: Info.name
		})
		// 发起本页面id类型的数据请求
		getImgList()
	}) 
	
	// 下拉触底,加载更多图片操作
	onReachBottom(()=>{
		if(noData.value) return
		console.log("到底了")
		Info.pageNum ++;
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
