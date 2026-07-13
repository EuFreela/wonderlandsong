/** Relative luminance 0 (black) → 1 (white). */

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const raw = hex.trim().replace('#', '');
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((c) => c + c)
          .join('')
      : raw;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;

  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16),
  };
}

export function rgbLuminance(r: number, g: number, b: number): number {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

export function blendLuminance(
  base: number,
  filterColor?: string,
  filterOpacity?: number,
): number {
  const opacity = Math.min(1, Math.max(0, filterOpacity ?? 0));
  if (!filterColor || opacity <= 0) return base;

  const rgb = hexToRgb(filterColor);
  if (!rgb) return base;

  const filterLum = rgbLuminance(rgb.r, rgb.g, rgb.b);
  return base * (1 - opacity) + filterLum * opacity;
}

/**
 * Samples the top band of an image (header zone) and returns average luminance.
 * Same-origin assets only (public/images).
 */
export function sampleImageLuminance(src: string): Promise<number> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';

    img.onload = () => {
      try {
        const width = 48;
        const height = 16;
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          resolve(0.5);
          return;
        }

        // Top ~25% of the image — region under the sticky header
        const sampleH = Math.max(1, Math.floor(img.naturalHeight * 0.25));
        ctx.drawImage(img, 0, 0, img.naturalWidth, sampleH, 0, 0, width, height);
        const { data } = ctx.getImageData(0, 0, width, height);

        let sum = 0;
        const pixels = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
          sum += rgbLuminance(data[i], data[i + 1], data[i + 2]);
        }
        resolve(sum / pixels);
      } catch {
        resolve(0.5);
      }
    };

    img.onerror = () => resolve(0.5);
    img.src = src;
  });
}

export type HeaderTone = 'light' | 'dark';

/** light text on dark surfaces; dark text on light surfaces */
export function toneFromLuminance(luminance: number): HeaderTone {
  return luminance < 0.48 ? 'light' : 'dark';
}
