"use strict";
const common_vendor = require("../common/vendor.js");
const Base_url = "https://tea.qingnian8.com/api/bizhi";
const request = (config = {}) => {
  let { url, method = "GET", header = {}, data = {} } = config;
  url = Base_url + url;
  header["access-key"] = "longxiami";
  header["token"] = "75565748ffdjg";
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method,
      header,
      data,
      // header:{ 
      // 	"access-key":"longxiami",
      // 	},
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
