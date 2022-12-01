var runningSum = function(nums) {
    let result = [];
    nums.forEach((num, i)=>{
        let runSum = num;
        if(result.length) {
            runSum += result[i-1];
        }
        result.push(runSum);
    })
    return result;
};