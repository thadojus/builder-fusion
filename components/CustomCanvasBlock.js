import { useEffect, useRef } from 'react';

const CustomCanvasBlock = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ensure high-DPI rendering
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const cssWidth = 884;
    const cssHeight = 607;
    canvas.width = Math.floor(cssWidth * dpr);
    canvas.height = Math.floor(cssHeight * dpr);
    canvas.style.width = cssWidth + 'px';
    canvas.style.height = cssHeight + 'px';
    ctx.scale(dpr, dpr);

    // Simple background fill to mirror the black canvas in the provided snippet
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, cssWidth, cssHeight);
  }, []);

  return (
    <section className="w-full bg-transparent mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="mx-auto w-full flex justify-center">
            <canvas
              ref={canvasRef}
              width={884}
              height={607}
              className="border border-white/20 bg-black shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCanvasBlock;
