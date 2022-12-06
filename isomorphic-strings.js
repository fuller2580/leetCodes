var isIsomorphic = function(s, t) {
  let sobj = {};
  let tobj = {};
  let sArr = s.split('');
  let tArr = t.split('');
  let isIso = true;
  sArr.forEach((char, i) => {
      if (sobj[char] === undefined && tobj[tArr[i]] === undefined) {
          sobj[char] = tArr[i];
          tobj[tArr[i]] = char;
      } else {
          if (sobj[char] !== tArr[i] || tobj[tArr[i]] !== char) {
              isIso = false;
          }
      }
  })
  return isIso;
};