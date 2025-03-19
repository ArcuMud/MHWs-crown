import html2canvas from 'html2canvas';

/**
 * 簡單的截圖函數 - 調整 grid gap 並指定圖片大小
 *
 * @param {HTMLElement} element - 要截圖的 DOM 元素
 * @param {object} options - 選項
 * @param {string} options.backgroundColor - 背景顏色，默認白色
 * @param {string} options.filename - 下載的檔案名稱，默認 'screenshot.jpg'
 * @param {number} options.quality - JPEG 品質 (0-1)，默認 0.8
 * @param {boolean} options.download - 是否自動下載，默認 true
 * @param {boolean} options.removeGridGap - 是否在截圖前移除 grid gap，默認 false
 * @param {number} options.width - 指定輸出圖片寬度 (像素)，默認為原始尺寸
 * @param {number} options.height - 指定輸出圖片高度 (像素)，默認為原始尺寸
 * @returns {Promise<string>} 返回截圖的 dataURL
 */
export async function captureScreenshot(
  element: HTMLElement,
  options: {
    backgroundColor?: string;
    filename?: string;
    quality?: number;
    download?: boolean;
    removeGridGap?: boolean;
    width?: number;
    height?: number;
  } = {}
) {
  if (!element) throw new Error('未提供有效的元素');

  const {
    backgroundColor = '#ffffff',
    filename = 'screenshot.jpg',
    quality = 0.8,
    download = true,
    removeGridGap = false,
    width,
    height,
  } = options;

  // 存儲原始樣式
  const originalStyles: { [key: string]: any } = {};
  const gridElements: HTMLElement[] = [];

  try {
    // 如果需要移除 grid gap
    if (removeGridGap) {
      // 查找元素內所有使用 grid 或 flex 的元素
      const allElements = element.querySelectorAll('*');
      allElements.forEach((el) => {
        const computedStyle = window.getComputedStyle(el);
        const display = computedStyle.getPropertyValue('display');

        if (display === 'grid' || display === 'flex') {
          const htmlEl = el as HTMLElement;

          // 保存原始樣式
          const id = `el_${gridElements.length}`;
          originalStyles[id] = {
            gap: htmlEl.style.gap,
            gridGap: htmlEl.style.gridGap,
            gridRowGap: htmlEl.style.gridRowGap,
            gridColumnGap: htmlEl.style.gridColumnGap,
            rowGap: htmlEl.style.rowGap,
            columnGap: htmlEl.style.columnGap,
          };

          // 設置所有 gap 為 0
          htmlEl.style.gap = '0';
          htmlEl.style.gridGap = '0';
          htmlEl.style.gridRowGap = '0';
          htmlEl.style.gridColumnGap = '0';
          htmlEl.style.rowGap = '0';
          htmlEl.style.columnGap = '0';

          gridElements.push(htmlEl);
        }
      });

      // 給瀏覽器一點時間來重繪
      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    // 使用 html2canvas 截圖
    const canvas = await html2canvas(element, {
      backgroundColor,
      useCORS: true, // 允許跨域圖片
      allowTaint: true, // 允許污染畫布
      scale: 2, // 提高解析度
      logging: false, // 關閉日誌
    });

    // 如果需要調整圖片大小
    let finalCanvas = canvas;
    if (width || height) {
      // 創建一個新的 canvas 元素
      const resizedCanvas = document.createElement('canvas');
      const ctx = resizedCanvas.getContext('2d');

      // 設置新 canvas 的大小
      resizedCanvas.width = width || canvas.width;
      resizedCanvas.height = height || canvas.height;

      if (ctx) {
        // 繪製並調整大小
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, resizedCanvas.width, resizedCanvas.height);
        finalCanvas = resizedCanvas;
      }
    }

    // 轉換為 JPEG 格式並設置壓縮品質
    const imageUrl = finalCanvas.toDataURL('image/jpeg', quality);

    // 如果需要下載
    if (download) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = filename;
      link.click();
    }

    return imageUrl;
  } catch (error) {
    console.error('截圖失敗:', error);
    throw error;
  } finally {
    // 恢復原始樣式
    if (removeGridGap) {
      gridElements.forEach((el, index) => {
        const id = `el_${index}`;
        const original = originalStyles[id];

        // 恢復所有 gap 屬性
        Object.entries(original).forEach(([prop, value]) => {
          if (value) {
            (el.style as any)[prop] = value;
          } else {
            (el.style as any)[prop] = '';
          }
        });
      });
    }
  }
}
