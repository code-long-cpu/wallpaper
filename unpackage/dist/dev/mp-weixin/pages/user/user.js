"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_list_row2 = common_vendor.resolveComponent("list_row");
  (_easycom_uni_icons2 + _easycom_list_row2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_list_row = () => "../../components/list_row/list_row.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_list_row)();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userinfo = common_vendor.ref({});
    const getUserInfo = async () => {
      const res = await api_apis.apiUserInfo();
      userinfo.value = res.data;
      console.log(userinfo.value);
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.bannerHeight) + "px",
        b: common_assets._imports_0$1,
        c: common_vendor.t(userinfo.value.IP),
        d: common_vendor.p({
          type: "download-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        e: common_vendor.t(userinfo.value.downloadSize),
        f: common_vendor.p({
          url: "/pages/classList/classList?name='我的下载'"
        }),
        g: common_vendor.p({
          type: "star-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        h: common_vendor.t(userinfo.value.scoreSize),
        i: common_vendor.p({
          url: "/pages/classList/classList?name='我的收藏'"
        }),
        j: common_vendor.p({
          type: "chatboxes-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        k: common_vendor.p({
          type: "notification-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        l: common_vendor.p({
          type: "flag-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
