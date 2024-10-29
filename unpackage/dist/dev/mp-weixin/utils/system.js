"use strict";
const common_vendor = require("../common/vendor.js");
const SystemInfo = common_vendor.index.getSystemInfoSync();
const statusBarHeight = SystemInfo.statusBarHeight || 15;
const titleHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    const { height, top } = common_vendor.index.getMenuButtonBoundingClientRect();
    const titleHeight2 = height + (top - statusBarHeight) * 2;
    return titleHeight2;
  } else {
    return 30;
  }
};
const bannerHeight = statusBarHeight + titleHeight();
exports.bannerHeight = bannerHeight;
exports.statusBarHeight = statusBarHeight;
exports.titleHeight = titleHeight;
