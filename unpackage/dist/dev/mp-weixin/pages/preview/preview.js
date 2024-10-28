"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskShow),
        c: common_assets._imports_0$3,
        d: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        e: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "yyyy年MM月dd"
        }),
        f: common_vendor.p({
          type: "info",
          size: "30"
        }),
        g: common_vendor.o(infoPop),
        h: common_vendor.p({
          type: "star",
          size: "30"
        }),
        i: common_vendor.o(ScorePop),
        j: common_vendor.p({
          type: "download",
          size: "30"
        }),
        k: maskState.value,
        l: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        m: common_vendor.o(closeInfo),
        n: common_vendor.p({
          value: "3",
          readonly: true,
          touchable: true,
          size: "20"
        }),
        o: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        p: common_vendor.sr(infoPopup, "2dad6c07-5", {
          "k": "infoPopup"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        s: common_vendor.o(closeScoreInfo),
        t: common_vendor.o(($event) => score.value = $event),
        v: common_vendor.p({
          size: "20",
          allowHalf: true,
          modelValue: score.value
        }),
        w: common_vendor.t(score.value),
        x: !score.value,
        y: common_vendor.o(clickScore),
        z: common_vendor.sr(ScorePopup, "2dad6c07-8", {
          "k": "ScorePopup"
        }),
        A: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
