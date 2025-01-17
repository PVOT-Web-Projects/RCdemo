import React, { useEffect, useRef } from 'react';
import './textcircular.scss';

function CurvedText() {
  const svgRef = useRef(null);

  useEffect(() => {

    const updateTextPath = () => {
      if (svgRef.current) {
        const width = Math.min(window.innerWidth, 800);
        const height = width * 0.5;
        svgRef.current.setAttribute('viewBox', `0 0 ${width} ${height}`);
      }
    };

    updateTextPath();
    window.addEventListener('resize', updateTextPath);
    return () => window.removeEventListener('resize', updateTextPath);
  }, []);

  return (
    <div className="curved-text-container">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
      >
        <defs>
          <path
            id="curve"
            d="M 50 350 Q 400 50 750 350"
            fill="transparent"
          />
        </defs>
        <text>
          <textPath
            href="#curve"
            startOffset="50%"
            textAnchor="middle"
          >
            WHERE ELEGANCE MEETS DESIRE
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default CurvedText;

