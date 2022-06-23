var maxSubArray = function (nums: number[]) {
  let max = nums[0];
  let before = 0;
  let now = 0;

  for (let i = 0; i < nums.length; i++) {
    now = before + nums[i] > nums[i] ? before + nums[i] : nums[i];
    max = now > max ? now : max;

    before = now;
  }

  return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
