var pivotIndex = function(nums) {
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
      let leftSum = checkSum(nums, 0, i);
      let rightSum = checkSum(nums, i+1, nums.length);
      if (leftSum === rightSum) {
          return index = i;
      }
  }
  return index;
};

var checkSum = function(arr, start, end) {
  let sum = 0;
  if(end > start) {
      let checkarr = arr.slice(start,end)
      checkarr.forEach(num => {
          sum += num;
      })
  }
  return sum;
}