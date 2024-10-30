<template>
	<view class="classifyLayout pageBg">
		<!-- 自定义公共头部搜索栏 -->
		<custom-navi-bar title="分类"></custom-navi-bar>
		<view class="classify">
			<theme-item v-for="item in themeList" :item='item'></theme-item>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	import{apiThemeList} from "@/api/apis.js";
	// 封装请求:获取专题精选壁纸
	const themeList = ref([])
	const getThemeList = async()=>{
		const res = await apiThemeList({
			pageSize:20,
			})
		themeList.value = res.data
		console.log(themeList.value)
	}
	getThemeList()
	
</script>

<style lang="scss" scoped>
.classify{
	padding:30rpx;
	// border:solid 1px black;
	display: grid;
	gap:15rpx;
	grid-template-columns:repeat(3,1fr);
}
</style>
