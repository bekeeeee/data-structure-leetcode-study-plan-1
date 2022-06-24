function maxProfit(prices: number[]): number {
  let minProfit: number = Number.MAX_SAFE_INTEGER;
  let maxProfit: number = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minProfit) {
      minProfit = prices[i];
    } else
      maxProfit =
        prices[i] - minProfit > maxProfit ? prices[i] - minProfit : maxProfit;
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
