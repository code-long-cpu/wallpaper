// 需要手动返回一个promise对象，await只能接收promise成功返 回的resolve的值;

const Base_url = "https://tea.qingnian8.com/api/bizhi"

export const request = (config={})=>{
	let {url,method="GET",header={},data={}} = config
	url = Base_url+url
	header['access-key']="longxiami"
	header['token']="75565748ffdjg"
	return new Promise((resolve,reject)=>{
		uni.request({  
			url,
			method,
			header,
			data,
			// header:{ 
			// 	"access-key":"longxiami",
			// 	},
			success:res=>{
				if(res.data.errCode===0){
					resolve(res.data)
				}else if(res.data.errCode===400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}
			},
			fail:err=>{
				reject(err)
				} 
			})
	})
}
	
	
	
