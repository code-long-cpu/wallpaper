"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const maskShow = () => {
      maskState.value = !maskState.value;
    };
    const infoPopup = common_vendor.ref(null);
    const infoPop = () => {
      infoPopup.value.open();
    };
    const closeInfo = () => {
      infoPopup.value.close();
    };
    const ScorePopup = common_vendor.ref(null);
    const ScorePop = () => {
      ScorePopup.value.open();
    };
    const closeScoreInfo = () => {
      ScorePopup.value.close();
    };
    const score = common_vendor.ref(0);
    const clickScore = () => {
      console.log("评分了");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskShow),
        c: common_assets._imports_0$3,
        d: common_vendor.o(goBack),
        e: common_vendor.p({
          type: "back",
          size: "30",
          color: "#fff"
        }),
        f: common_vendor.unref(utils_system.statusBarHeight) + "px",
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "yyyy年MM月dd"
        }),
        i: common_vendor.p({
          type: "info",
          size: "30"
        }),
        j: common_vendor.o(infoPop),
        k: common_vendor.p({
          type: "star",
          size: "30"
        }),
        l: common_vendor.o(ScorePop),
        m: common_vendor.p({
          type: "download",
          size: "30"
        }),
        n: maskState.value,
        o: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        p: common_vendor.o(closeInfo),
        q: common_vendor.p({
          value: "3",
          readonly: true,
          touchable: true,
          size: "20"
        }),
        r: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        s: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        t: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false
        }),
        v: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        w: common_vendor.o(closeScoreInfo),
        x: common_vendor.o(($event) => score.value = $event),
        y: common_vendor.p({
          size: "20",
          allowHalf: true,
          modelValue: score.value
        }),
        z: common_vendor.t(score.value),
        A: !score.value,
        B: common_vendor.o(clickScore),
        C: common_vendor.sr(ScorePopup, "2dad6c07-9", {
          "k": "ScorePopup"
        }),
        D: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
