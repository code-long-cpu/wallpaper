"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    const Info = {
      pageNum: 1,
      pageSize: 12
    };
    const noData = common_vendor.ref(false);
    const ImgList = common_vendor.ref([]);
    const getImgList = async () => {
      const res = await api_apis.apiImgList(Info);
      ImgList.value = [...ImgList.value, ...res.data];
      if (Info.pageSize > res.data.length)
        noData.value = true;
      common_vendor.index.setStorageSync("StrogeList", ImgList.value);
      console.log(res.data);
    };
    let shareName;
    common_vendor.onLoad((e) => {
      console.log(e);
      Info.name = e.name;
      Info.classid = e.id;
      shareName = e.name;
      common_vendor.index.setNavigationBarTitle({
        title: Info.name
      });
      getImgList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      console.log("到底了");
      Info.pageNum++;
      getImgList();
    });
    common_vendor.onShareAppMessage((e) => {
      console.log(e);
      return {
        title: "龙家乐壁纸-" + shareName,
        path: "/pages/classList/classList?id=" + Info.classid + "&name=" + shareName
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "龙家乐壁纸-" + shareName,
        // imageUrl:"",  //设置分享缩略图
        query: "id=" + Info.classid + "&name=" + shareName
      };
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("StrogeList");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !ImgList.value.length && !noData.value
      }, !ImgList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(ImgList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: "/pages/preview/preview?id=" + item._id
          };
        }),
        d: ImgList.value.length || noData.value
      }, ImgList.value.length || noData.value ? {
        e: common_vendor.p({
          status: noData.value ? "nomore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
