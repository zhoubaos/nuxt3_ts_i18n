/**
 * @desc 保留n位小数，至少保留一位小数
 * @example
 * fixedDecimal(1.23, 3) => 1.230
 * fixedDecimal(1, 2) => 1.00
 * fixedDecimal(1.23456, 2) => 1.23
 */
export const fixedDecimal = (target: any, n: number = 2): string => {
  if (isNaN(target)) {
    return '0.' + '0'.repeat(n);
  }
  // 至少保留1位
  n = n < 1 ? 1 : n;
  const a = target.toString().split('.');
  const strategyMap = new Map();
  // 整数
  strategyMap.set(
    () => a.length === 1,
    () => target + '.' + ''.padEnd(n, '0')
  );
  // 小数，且小数位数小于等于n
  strategyMap.set(
    () => a.length === 2 && a[1].length <= n,
    () => a[0] + '.' + a[1].padEnd(n, '0')
  );
  // 小数，且小数位数大于n
  strategyMap.set(
    () => a.length === 2 && a[1].length > n,
    () => {
      const nItem = a[1][n - 1];
      const nNextItem = a[1][n];
      const lastItem = nNextItem >= 5 ? nItem + 1 : nItem;
      return a[0] + '.' + a[1].substring(0, n - 1) + lastItem;
    }
  );

  for (const [condition, result] of strategyMap) {
    if (condition()) {
      return result();
    }
  }

  return '0.' + '0'.repeat(n);
};
