function twoSum(nums: number[], target: number): number[] {
  let p1 = 0;
  let p2 = nums.length - 1;

  for (let i = 0; i < nums.length && p1 < p2; i++) {
    if (nums[p1] + nums[p2] > target) {
      p2--;
      continue;
    } else if (nums[p1] + nums[p2] < target) {
      p1++;
      continue;
    } else return [p1, p2];
  }
  return [-1, -1];
}

function twoSumHash(nums: number[], target: number): number[] {
  const hash: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }

  return [-1, -1];
}

console.log(twoSumHash([2, 7, 11, 15], 17));
