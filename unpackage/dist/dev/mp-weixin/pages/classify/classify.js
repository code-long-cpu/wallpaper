"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_navi_bar2 = common_vendor.resolveComponent("custom-navi-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_navi_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_navi_bar = () => "../../components/custom-navi-bar/custom-navi-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_navi_bar + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const themeList = common_vendor.ref([]);
    const getThemeList = async () => {
      const res = await api_apis.apiThemeList({
        pageSize: 20
      });
      themeList.value = res.data;
      console.log(themeList.value);
    };
    getThemeList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(themeList.value, (item, k0, i0) => {
          return {
            a: "6bcfa975-1-" + i0,
            b: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
