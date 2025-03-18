const chars = '0123456789-_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export function compress(input: string): string {
  let bitBuffer = 0;
  let bitCount = 0;
  let compressed = '';

  // 處理每個數字，每個數字需要2位元
  for (let i = 0; i < input.length; i++) {
    // 將數字轉為2位元並加入buffer
    bitBuffer = (bitBuffer << 2) | parseInt(input[i]);
    bitCount += 2;

    // 當累積到6位元時，轉換為一個字元
    if (bitCount >= 6) {
      const index = (bitBuffer >> (bitCount - 6)) & 0x3f;
      compressed += chars[index];
      bitCount -= 6;
    }
  }

  // 處理剩餘的位元
  if (bitCount > 0) {
    // 左移到對齊6位元
    const index = (bitBuffer << (6 - bitCount)) & 0x3f;
    compressed += chars[index];
  }

  return compressed;
}

export function decompress(compressed: string, originalLength: number): string {
  let result = '';
  let bitBuffer = 0;
  let bitCount = 0;

  // 處理每個壓縮後的字元
  for (let i = 0; i < compressed.length; i++) {
    // 將字元轉換回6位元
    const value = chars.indexOf(compressed[i]);
    if (value === -1) throw new Error('Invalid character in compressed string');

    // 加入buffer
    bitBuffer = (bitBuffer << 6) | value;
    bitCount += 6;

    // 每次取出2位元轉換為數字
    while (bitCount >= 2 && result.length < originalLength) {
      const num = (bitBuffer >> (bitCount - 2)) & 0x3;
      result += num;
      bitCount -= 2;
    }
  }

  return result;
}
