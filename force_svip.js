// force_svip.js - FORCE ALL RESPONSES TO SVIP
let obj = JSON.parse($response.body);
if (obj.data) {
  obj.data.isVip = true;
  obj.data.isSvip = true;
  obj.data.vipExpireTime = 4102444800000;
  obj.data.svipExpireTime = 4102444800000;
  obj.data.vipLevel = 999;
  obj.data.pro = true;
  obj.data.canUseAllMaterial = true;
  obj.data.canExport4K = true;
  obj.data.canRemoveWatermark = true;
  obj.data.cloudSpace = "999GB";
}
if (obj.code !== 0) obj.code = 0;
$done({body: JSON.stringify(obj)});
