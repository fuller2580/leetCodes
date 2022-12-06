var isSubsequence = function(s, t) {
  let sArr = s.split('');
  let tArr = t.split('');
  let isSub = true;
  let lastCharPos;
  sArr.forEach(char => {
      if(!t.includes(char)) {
          isSub = false;
      } else {
          if (lastCharPos === undefined) {
              lastCharPos = tArr.indexOf(char);
          } else if (tArr.indexOf(char) > lastCharPos) {
              lastCharPos = tArr.indexOf(char);
          } else {
              isSub = false;
          }
      }
  })
  return isSub;
};