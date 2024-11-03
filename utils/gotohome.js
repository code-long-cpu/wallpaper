export const gotohome =()=>{
	uni.showModal({
		title:'提示',
		content:'将返回到首页',
		showCancel:false   ,//只剩一个确认键，删除取消键
		success:res=>{  
			if(res.confirm){
				uni.reLaunch({
					url:'/pages/index/index'
				})
			}
		}
	})
}