var isSubsequence = function(s, t) {
  let sArr = s.split('');
  let tArr = t.split('');
  let sPointer = 0;
  let tPointer = 0;
  while (sPointer < sArr.length && tPointer < tArr.length) {
    if (sArr[sPointer] === tArr[tPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  return sPointer === sArr.length;
};