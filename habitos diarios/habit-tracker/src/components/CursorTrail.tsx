// src/components/CursorTrail.tsx

import React, { useState, useEffect } from 'react';

const CursorTrail: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Verifica se o elemento sob o cursor é interativo (botão, input, etc.)
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'INPUT') {
        setIsInteractive(true);
      } else {
        setIsInteractive(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-trail"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: isInteractive
          ? 'radial-gradient(circle, var(--neon-green), transparent)' /* Cor amarela para elementos interativos */
          : 'radial-gradient(circle, var(--neon-purple), transparent)', /* Cor rosa para o estado padrão */
        transform: isInteractive
          ? 'translate(-50%, -50%) scale(1.2)'
          : 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorTrail;