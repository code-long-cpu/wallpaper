"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_navi_bar2 = common_vendor.resolveComponent("custom-navi-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _component_class = common_vendor.resolveComponent("class");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_navi_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2 + _component_class + _easycom_uni_dateformat2 + _easycom_uni_popup2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_navi_bar = () => "../../components/custom-navi-bar/custom-navi-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_navi_bar + _easycom_uni_icons + _easycom_uni_tag + _easycom_uni_dateformat + _easycom_uni_popup + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const noticePopup = common_vendor.ref(null);
    const notice = () => {
      noticePopup.value.open();
    };
    const navigate = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "rgb(40, 176, 138)"
        }),
        f: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        g: common_vendor.o(notice),
        h: common_vendor.p({
          type: "right",
          size: "16"
        }),
        i: common_vendor.p({
          inverted: true,
          text: "置顶",
          type: "error",
          size: "mini"
        }),
        j: common_vendor.p({
          date: Date.now(),
          format: "yyyy-MM-dd hh:mm:ss"
        }),
        k: common_assets._imports_3,
        l: common_vendor.sr(noticePopup, "1cf27b2a-3", {
          "k": "noticePopup"
        }),
        m: common_vendor.p({
          type: "center"
        }),
        n: common_vendor.p({
          type: "calendar",
          size: "18",
          color: "rgb(40, 176, 138)"
        }),
        o: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        p: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        q: common_vendor.o(navigate),
        r: common_assets._imports_4,
        s: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-11-" + i0
          };
        }),
        t: common_vendor.p({
          isMore: false
        }),
        v: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
