function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let array1Idx: number = m - 1;
  let array2Idx: number = n - 1;
  let array1IdxMod: number = m + n - 1;

  while (array2Idx >= 0) {
    nums1[array1IdxMod--] =
      array1Idx >= 0 && nums1[array1Idx] > nums2[array2Idx]
        ? nums1[array1Idx--]
        : nums2[array2Idx--];
  }
  return nums1;
}

console.log(merge([2, 5, 9], 3, [3, 7, 8, 10], 4));
