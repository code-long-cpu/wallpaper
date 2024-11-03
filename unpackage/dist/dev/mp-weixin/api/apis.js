"use strict";
const utils_request = require("../utils/request.js");
const apiRecomImg = () => {
  return utils_request.request({ url: "/randomWall" });
};
const apiNoticeList = (data = {}) => {
  return utils_request.request(
    {
      url: "/wallNewsList",
      data
    }
  );
};
const apiThemeList = (data = {}) => {
  return utils_request.request({
    url: "/classify",
    data
  });
};
const apiImgList = (data = {}) => {
  return utils_request.request({
    url: "/wallList",
    data
  });
};
const apiSetupScore = (data = {}) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
const apiDownLoadWall = (data = {}) => {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
};
const apiDetailWall = (data = {}) => {
  return utils_request.request({
    url: "/detailWall",
    data
  });
};
const apiUserInfo = (data = {}) => {
  return utils_request.request({
    url: "/userInfo"
    // data
  });
};
exports.apiDetailWall = apiDetailWall;
exports.apiDownLoadWall = apiDownLoadWall;
exports.apiImgList = apiImgList;
exports.apiNoticeList = apiNoticeList;
exports.apiRecomImg = apiRecomImg;
exports.apiSetupScore = apiSetupScore;
exports.apiThemeList = apiThemeList;
exports.apiUserInfo = apiUserInfo;
