function containsDuplicate(nums: number[]): boolean {
  const hash: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true;
    else hash[nums[i]] = 1;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 1]));
