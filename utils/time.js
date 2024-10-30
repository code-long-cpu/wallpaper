export function timeAgo(timestamp) {
  const now = Date.now(); // 当前时间的时间戳
  const diff = now - timestamp; // 时间差（毫秒）

  const minute = 60 * 1000; // 1分钟的毫秒数
  const hour = 60 * minute; // 1小时的毫秒数
  const day = 24 * hour; // 1天的毫秒数
  const month = 30 * day; // 1个月（按30天计算）的毫秒数
  const threeMonths = 3 * month; // 3个月的毫秒数

  if (diff <= minute) {
    return "1分钟";
  } else if (diff < hour) {
    const minutes = Math.floor(diff / minute);
    return `${minutes}分钟`;
  } else if (diff < day) {
    const hours = Math.floor(diff / hour);
    return `${hours}小时`;
  } else if (diff < month) {
    const days = Math.floor(diff / day);
    return `${days}天`;
  } else if (diff < threeMonths) {
    const months = Math.floor(diff / month);
    return `${months}月`;
  } else {
    return "三个月";
  }
}

// 示例调用
console.log(timeAgo(Date.now() - 5000)); // 输出：1分钟
console.log(timeAgo(Date.now() - 5 * 60 * 1000)); // 输出：5分钟
console.log(timeAgo(Date.now() - 3 * 60 * 60 * 1000)); // 输出：3小时
console.log(timeAgo(Date.now() - 10 * 24 * 60 * 60 * 1000)); // 输出：10天
console.log(timeAgo(Date.now() - 2 * 30 * 24 * 60 * 60 * 1000)); // 输出：2月
console.log(timeAgo(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000)); // 输出：三个月
