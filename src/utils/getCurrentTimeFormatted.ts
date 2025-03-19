/**
 * 將當前時間轉換為 "YYYYMMDDHHmmss" 格式的字符串
 * 例如: "20250319181724"
 * @returns 格式化後的時間字符串
 */
export function getCurrentTimeFormatted(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}
