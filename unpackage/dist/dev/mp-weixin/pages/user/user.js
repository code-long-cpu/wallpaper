"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          type: "download-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        c: common_vendor.p({
          url: "/pages/classify/classify"
        }),
        d: common_vendor.p({
          type: "star-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        e: common_vendor.p({
          url: "/pages/classify/classify"
        }),
        f: common_vendor.p({
          type: "chatboxes-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        g: common_vendor.p({
          type: "notification-filled",
          size: "30",
          color: "rgb(40, 176, 138)"
        }),
        h: common_vendor.p({
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
