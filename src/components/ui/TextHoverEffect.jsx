import React, { useRef, useState } from "react";

export function TextHoverEffect({ text, duration = 0, automatic = false }) {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCursor({ x, y });
      setMaskPosition({ cx: `${x}%`, cy: `${y}%` });
    }
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: "visible", cursor: "default" }}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#6b5a38" />
          <stop offset="40%"  stopColor="#C8A96E" />
          <stop offset="60%"  stopColor="#F0EAD8" />
          <stop offset="80%"  stopColor="#C8A96E" />
          <stop offset="100%" stopColor="#6b5a38" />
        </linearGradient>

        <radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          r="30%"
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </radialGradient>

        <mask id="textMask">
          <rect
            x="0" y="0" width="300" height="100"
            fill="url(#revealMask)"
            style={{
              transition: hovered ? "none" : "all 1.5s ease",
            }}
          />
        </mask>
      </defs>

      {/* Base outline text */}
      <text
        x="50%"
        y="70%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="rgba(200,169,110,0.15)"
        strokeWidth="0.6"
        fill="transparent"
        fontSize="36"
        fontFamily=" times new roman  "
        fontWeight="300"
        letterSpacing="6"
      >
        {text}
      </text>

      {/* Hover-revealed gradient text */}
      <text
        x="50%"
        y="70%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.6"
        fill="transparent"
        fontSize="36"
        fontFamily=" times new roman"
        fontWeight="300"
        letterSpacing="6"
        mask="url(#textMask)"
      >
        {text}
      </text>
    </svg>
  );
}