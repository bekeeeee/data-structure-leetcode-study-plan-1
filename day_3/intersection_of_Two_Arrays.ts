function intersect(nums1: number[], nums2: number[]): number[] {
  const map: { [key: number]: number } = {};
  const retArr: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) map[nums1[i]]++;
    else map[nums1[i]] = 1;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      map[nums2[i]]--;
      retArr.push(nums2[i]);
    }
  }
  return retArr;
}

console.log(intersect([4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4]));
