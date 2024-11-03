"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
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
      if (currentInfo.value.userScore) {
        isScored.value = true;
        userScore.value = currentInfo.value.userScore;
      }
      ScorePopup.value.open();
    };
    const closeScoreInfo = () => {
      ScorePopup.value.close();
      userScore.value = 0;
      isScored.value = false;
    };
    const userScore = common_vendor.ref(0);
    const isScored = common_vendor.ref(false);
    const clickScore = async () => {
      common_vendor.index.showLoading({
        title: "正在评分…"
      });
      console.log("评分了");
      console.log(userScore.value);
      const {
        classid,
        _id: wallId
      } = currentInfo.value;
      const res = await api_apis.apiSetupScore({
        classid,
        wallId,
        userScore: userScore.value
      });
      common_vendor.index.hideLoading();
      console.log(res);
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功！",
          icon: "success"
        });
        newList.value[currentIndex.value].userScore = userScore.value;
        common_vendor.index.setStorage("StrogeList", newList.value);
        closeScoreInfo();
      }
    };
    const goBack = () => {
      common_vendor.index.navigateBack({
        // 成功返回的回调（正常页面返回）
        success: (res) => {
        },
        // 失败的回调（我分享单张图片给别人的页面，无法返回，处理情况:直接relanch到首页）
        fail: (err) => {
          common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        }
      });
    };
    const newList = common_vendor.ref([]);
    const StrogeList = common_vendor.index.getStorageSync("StrogeList") || [];
    newList.value = StrogeList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    console.log(newList.value);
    const cuerrentId = common_vendor.ref();
    const currentIndex = common_vendor.ref();
    common_vendor.onLoad(async (e) => {
      console.log(e);
      cuerrentId.value = e.id;
      if (e.type == "share") {
        const res = await api_apis.apiDetailWall({
          id: cuerrentId.value
        });
        console.log(res);
        newList.value = res.data.map((item) => {
          return {
            ...item,
            picurl: item.smallPicurl.replace("_small.webp", ".jpg")
          };
        });
      }
      currentIndex.value = newList.value.findIndex((item) => item._id === cuerrentId.value);
      currentInfo.value = newList.value[currentIndex.value];
    });
    const currentInfo = common_vendor.ref(null);
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = newList.value[currentIndex.value];
      console.log(currentInfo.value);
    };
    const downloadImg = async () => {
      try {
        common_vendor.index.showLoading({
          title: "加载中…",
          mask: true
        });
        const {
          classid,
          _id: wallId
        } = currentInfo.value;
        const res = await api_apis.apiDownLoadWall({
          classid,
          wallId
        });
        if (res.errCode != 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              //正确保存图片的操作
              success: (res3) => {
                common_vendor.index.showToast({
                  title: "保存相册成功，请到相册查看",
                  icon: "success"
                });
              },
              //不小心点击了拒绝，二次授权保存相册操作
              fail: (err) => {
                console.log(err);
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "图片没有正确保存",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  //弹出弹窗指引授权操作
                  title: "授权提示",
                  content: "需要授权保存到相册",
                  success: (res3) => {
                    if (res3.confirm)
                      console.log("确认授权");
                    common_vendor.index.openSetting({
                      //弹出授权窗口
                      success: (setting) => {
                        console.log(
                          setting
                        );
                        if (setting.authSetting["scope.writePhotosAlbum"] === true) {
                          common_vendor.index.showToast({
                            title: "获取授权成功",
                            icon: "none"
                          });
                        } else {
                          common_vendor.index.showToast({
                            //么有打开权限按钮，提示失败
                            title: "获取授权失败",
                            icon: "none"
                          });
                        }
                      }
                    });
                  }
                });
              },
              // 无论图片保存成功还是失败,关闭提示框（也可以不写，因为后面会覆盖前一个，但是showLoading得手动关才行）
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        console.log(err);
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onShareAppMessage((e) => {
      console.log(e);
      return {
        title: "龙家乐壁纸-",
        path: "/pages/preview/preview?id=" + cuerrentId.value + "&type=share"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "龙家乐壁纸-",
        // imageUrl:"",  //设置分享缩略图
        query: "id=" + cuerrentId.value + "&type=share"
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? {
        b: common_vendor.f(newList.value, (item, index, i0) => {
          return {
            a: common_vendor.o(maskShow, item._id),
            b: item.picurl,
            c: item._id
          };
        }),
        c: currentIndex.value,
        d: common_vendor.o(swiperChange),
        e: common_vendor.o(goBack),
        f: common_vendor.p({
          type: "back",
          size: "30",
          color: "#fff"
        }),
        g: common_vendor.unref(utils_system.statusBarHeight) + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(newList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "yyyy年MM月dd"
        }),
        l: common_vendor.p({
          type: "info",
          size: "30"
        }),
        m: common_vendor.o(infoPop),
        n: common_vendor.p({
          type: "star",
          size: "30"
        }),
        o: common_vendor.t(currentInfo.value.score),
        p: common_vendor.o(ScorePop),
        q: common_vendor.p({
          type: "download",
          size: "30"
        }),
        r: common_vendor.o(downloadImg),
        s: maskState.value,
        t: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        v: common_vendor.o(closeInfo),
        w: common_vendor.t(currentInfo.value._id),
        x: common_vendor.t(currentInfo.value.nickname),
        y: common_vendor.p({
          value: currentInfo.value.score,
          readonly: true,
          touchable: true,
          size: "20"
        }),
        z: common_vendor.t(currentInfo.value.score),
        A: common_vendor.t(currentInfo.value.description),
        B: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        C: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          type: "bottom",
          ["safe-area"]: false
        }),
        E: common_vendor.t(isScored.value ? "已评过分了~" : "壁纸信息"),
        F: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        G: common_vendor.o(closeScoreInfo),
        H: common_vendor.o(($event) => userScore.value = $event),
        I: common_vendor.p({
          size: "20",
          allowHalf: true,
          disabled: isScored.value,
          modelValue: userScore.value
        }),
        J: common_vendor.t(userScore.value),
        K: !userScore.value || isScored.value,
        L: common_vendor.o(clickScore),
        M: common_vendor.sr(ScorePopup, "2dad6c07-9", {
          "k": "ScorePopup"
        }),
        N: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
