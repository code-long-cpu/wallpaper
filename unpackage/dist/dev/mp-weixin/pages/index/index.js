"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_apis = require("../../api/apis.js");
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
    const BannerImg = common_vendor.ref([]);
    const getBannerImg = () => {
      common_vendor.index.request({
        url: "https://tea.qingnian8.com/api/bizhi/homeBanner",
        header: {
          "access-key": "longxiami"
        },
        success: (res) => {
          console.log(res);
          BannerImg.value = res.data.data;
          console.log(BannerImg.value);
        },
        fail: (err) => {
        }
      });
    };
    getBannerImg();
    const RecomImg = common_vendor.ref([]);
    const getRecomImg = async () => {
      const res = await api_apis.apiRecomImg();
      console.log(res);
      RecomImg.value = res.data;
    };
    getRecomImg();
    const NoticeList = common_vendor.ref([]);
    const getNotice = async () => {
      const res = await api_apis.apiNoticeList({ select: true });
      NoticeList.value = res.data;
    };
    getNotice();
    const themeList = common_vendor.ref([]);
    const getThemeList = async () => {
      const res = await api_apis.apiThemeList({ select: true });
      themeList.value = res.data;
      console.log(themeList.value);
    };
    getThemeList();
    common_vendor.onShareAppMessage((e) => {
      console.log(e);
      return {
        title: "龙家乐壁纸",
        path: "/pages/index/index"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "龙家乐壁纸"
        // imageUrl:"",  //设置分享缩略图
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(BannerImg.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "rgb(40, 176, 138)"
        }),
        d: common_vendor.f(NoticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.o(notice, item._id),
            c: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16"
        }),
        f: common_vendor.p({
          inverted: true,
          text: "置顶",
          type: "error",
          size: "mini"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "yyyy-MM-dd hh:mm:ss"
        }),
        h: common_assets._imports_0,
        i: common_vendor.sr(noticePopup, "1cf27b2a-3", {
          "k": "noticePopup"
        }),
        j: common_vendor.p({
          type: "center"
        }),
        k: common_vendor.p({
          type: "calendar",
          size: "18",
          color: "rgb(40, 176, 138)"
        }),
        l: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        m: common_vendor.f(RecomImg.value, (item, k0, i0) => {
          return {
            a: common_vendor.o(navigate, item._id),
            b: item.smallPicurl,
            c: item._id
          };
        }),
        n: common_vendor.f(themeList.value, (item, k0, i0) => {
          return {
            a: "1cf27b2a-11-" + i0,
            b: common_vendor.p({
              isMore: false,
              item
            })
          };
        }),
        o: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
