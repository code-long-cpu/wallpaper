	// 导出状态栏高度
	const SystemInfo = uni.getSystemInfoSync();
	export const statusBarHeight = SystemInfo.statusBarHeight||15;
	
	// 导出胶囊按钮高度/标题栏高度
	export const titleHeight=()=>{
		// 小程序：如果检测到时小程序有胶囊按钮，就返回计算高度
		if(uni.getMenuButtonBoundingClientRect){
			const {height,top} = uni.getMenuButtonBoundingClientRect();
			const titleHeight = height+((top-statusBarHeight)*2)
			return titleHeight;
		}else{
			// 网页：如果没检测到小程序，没有胶囊按钮，就返回固定高度
			return 30;
		}
	}
	
	// 导出banner广告栏所在位置的高度
	export const bannerHeight= statusBarHeight+ titleHeight()