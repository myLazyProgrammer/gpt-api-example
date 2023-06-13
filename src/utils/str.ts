export const hideString = (str: string, startLen: number, endLen: number) => {
  if (startLen + endLen >= str.length) {
    return str; // 隐藏区域长度不够
  }
  const start = str.substr(0, startLen);
  const end = str.substr(str.length - endLen);
  let middle = '';
  for (let i = 0; i < str.length - startLen - endLen; i++) {
    middle += '*'; // 用 * 替换掉中间一部分
  }
  return start + middle + end;
};
