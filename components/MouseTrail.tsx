import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

interface MouseTrailProps {
  isDark: boolean;
}

export function MouseTrail({ isDark }: MouseTrailProps) {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: idRef.current++,
      };

      setTrail(prevTrail => {
        const newTrail = [...prevTrail, newPoint];
        if (newTrail.length > 25) {
          return newTrail.slice(-25);
        }
        return newTrail;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const cleanup = setInterval(() => {
      setTrail(prevTrail => prevTrail.slice(-20));
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: (index / trail.length) * 0.8,
            transform: `scale(${0.5 + (index / trail.length) * 0.5})`,
          }}
        >
          <div 
            className={`w-3 h-3 rounded-full blur-sm animate-pulse ${
              isDark 
                ? 'bg-white shadow-lg shadow-white/50' 
                : 'bg-black shadow-lg shadow-black/50'
            }`} 
          />
          <div 
            className={`absolute inset-0 w-3 h-3 rounded-full animate-ping border ${
              isDark 
                ? 'bg-white/20 border-white/50' 
                : 'bg-black/20 border-black/50'
            }`} 
          />
        </div>
      ))}
    </>
  );
}