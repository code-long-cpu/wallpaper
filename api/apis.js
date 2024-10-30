 import {request} from '@/utils/request.js'
 
 // 导出请求：获取轮播图图片
 export const apiBannarImg = () =>{
	 // return uni.request({
		// 	url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
		// 	header:{
		// 		"access-key":"longxiami",
		// 		}
		// }) 
	 return request({
		 url:"/homeBanner",
		 method:"POST",
		 })
 }
 // 导出请求：获取每日推荐图片
 export const apiRecomImg = ()=>{
	 return request({url:"/randomWall"})
 }
 
 // 导出请求：获取通告消息
 export const apiNoticeList = (data={})=>{
	 // return uni.request({
		// 	url:"https://tea.qingnian8.com/api/bizhi/wallNewsList",
		// 	header:{
		// 		"access-key":"longxiami",
		// 	},
		// 	data:{
		// 		select:true,
		// 	}
		// })
		return request(
		{url:"/wallNewsList",
		data,
		})
 }
 
 // 导出请求:获取专题精选封面
 export const apiThemeList = (data={})=>{
	 return request({
		 url:"/classify",
		 data,
	 })
 }