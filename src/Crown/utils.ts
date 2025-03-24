import { CheckFlag, CheckFlagValue } from './types';

export function toHex(decimal: number): string {
  return decimal.toString(16).padStart(2, '0');
}

export function hasFlag(value: CheckFlagValue, flag: CheckFlag): boolean {
  return (value & flag) === flag;
}

export function setFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value | flag) as CheckFlagValue;
}

export function removeFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value & ~flag) as CheckFlagValue;
}

export function toggleFlag(value: CheckFlagValue, flag: CheckFlag): CheckFlagValue {
  return (value ^ flag) as CheckFlagValue;
}

export function captureElement(element: HTMLElement) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set canvas dimensions
  const { width, height } = element.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;

  // Draw element content to canvas
  const xml = new XMLSerializer().serializeToString(element);
  const svg = new Blob([xml], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(svg);

  const image = new Image();
  image.onload = () => {
    if (!context) {
      console.error('Failed to get 2d context');
      return;
    }
    context.drawImage(image, 0, 0);
    URL.revokeObjectURL(url);

    // Download image
    const link = document.createElement('a');
    link.download = 'crown.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  image.src = url;
}
