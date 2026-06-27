import styles from "./index.module.scss";
import { useState, useEffect, useRef, useCallback } from 'react';

interface MousePos {
  x: number;
  y: number;
}

interface SceneSize {
  w: number;
  h: number;
}

interface BeamData {
  lx: number;
  ly: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  angle: number;
}

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 52,
  size: Math.random() * 2 + 0.5,
  op: Math.random() * 0.55 + 0.15,
  dur: (Math.random() * 3 + 2) + 's',
}));

function LighthouseSVG() {
  return (
    <svg
      className={styles["lh-svg"]}
      width={160}
      height={260}
      viewBox="0 0 160 260"
      aria-hidden="true"
    >
      {/* Base steps */}
      <rect x={30} y={222} width={100} height={12} rx={2} fill="#b0b8c8" />
      <rect x={22} y={234} width={116} height={12} rx={2} fill="#9098a8" />
      <rect x={14} y={246} width={132} height={12} rx={2} fill="#7a8298" />

      {/* Base platform */}
      <rect x={38} y={210} width={84} height={14} rx={2} fill="white" />

      {/* Tower body (tapered trapezoid) */}
      <polygon points="55,100 105,100 98,210 62,210" fill="white" />

      {/* Door arch */}
      <ellipse cx={80} cy={185} rx={9} ry={12} fill="#00aadd" />
      <rect x={71} y={185} width={18} height={16} fill="#00aadd" />

      {/* Window mid */}
      <ellipse cx={80} cy={148} rx={7} ry={9} fill="#00aadd" />
      <rect x={73} y={148} width={14} height={10} fill="#00aadd" />

      {/* Window upper */}
      <ellipse cx={80} cy={122} rx={6} ry={7} fill="#00aadd" />
      <rect x={74} y={122} width={12} height={8} fill="#00aadd" />

      {/* Gallery / railing */}
      <rect x={50} y={95} width={60} height={7} rx={2} fill="white" />

      {/* Lamp room */}
      <rect x={56} y={68} width={48} height={28} rx={3} fill="white" />
      <rect x={60} y={72} width={14} height={20} rx={2} fill="#00aadd" />
      <rect x={86} y={72} width={14} height={20} rx={2} fill="#00aadd" />

      {/* Lamp glow */}
      <circle className="lh-svg__lamp" cx={80} cy={82} r={6} fill="#fff8c0" />

      {/* Dome cap */}
      <ellipse cx={80} cy={67} rx={26} ry={8} fill="white" />
      <polygon points="80,46 56,67 104,67" fill="white" />
      <circle cx={80} cy={44} r={5} fill="white" />

      {/* Star */}
      <text
        x={80}
        y={39}
        textAnchor="middle"
        fontSize={14}
        fill="white"
        fontFamily="sans-serif"
      >
        ★
      </text>
    </svg>
  );
}

export default function Lighthouse() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef<MousePos>({ x: -999, y: -999 });

  const [mouse, setMouse] = useState<MousePos>({ x: -999, y: -999 });
  const [inside, setInside] = useState(false);
  const [size, setSize] = useState<SceneSize>({ w: 680, h: 520 });

  // Track container size
  useEffect(() => {
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        setSize({ w: e.contentRect.width, h: e.contentRect.height });
      }
    });
    if (sceneRef.current) obs.observe(sceneRef.current);
    return () => obs.disconnect();
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = document.getElementById("main__container")!.getBoundingClientRect();
    console.log(rect)
    pending.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    
      rafRef.current = requestAnimationFrame(() => {
        setMouse({ ...pending.current });
        rafRef.current = null;
      });
    
  }, []);

  // Lamp center in scene coordinates
  // lh-wrap: bottom=60px from scene bottom, svg height=260, lamp at y=82 in SVG
  const lampY = size.h - 60 - 260 + 82;
  const lampX = size.w * 0.5;

  function calcBeam(mx: number, my: number): BeamData | null {

    const dx = mx - lampX;
    const dy = my - lampY;
    const angle = Math.atan2(dy, dx);
    const spread = 0.20;
    const dist = 1000;
    return {
      lx: lampX,
      ly: lampY,
      x1: lampX + Math.cos(angle - spread) * dist,
      y1: lampY + Math.sin(angle - spread) * dist,
      x2: lampX + Math.cos(angle + spread) * dist,
      y2: lampY + Math.sin(angle + spread) * dist,
      angle,
    };
  }

  const beam = calcBeam(mouse.x, mouse.y);
  const oceanY = size.h - 90;

  let reflX: number | null = null;
  if (beam && Math.sin(beam.angle) > 0.05) {
    const t = (oceanY - beam.ly) / Math.sin(beam.angle);
    reflX = beam.lx + Math.cos(beam.angle) * t;
  }

  const beamPoints = beam
    ? `${beam.lx},${beam.ly} ${beam.x1},${beam.y1} ${beam.x2},${beam.y2}`
    : '';

  return (
    <div
      className={styles["lh-scene"]}
      ref={sceneRef}
      onMouseMove={onMove}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => { setInside(false); setMouse({ x: -999, y: -999 }); }}
      aria-label="Faro interactivo — mueve el cursor para dirigir el haz de luz"
    >

      {/* Beam SVG overlay */}
      <svg className={styles["lh-beam"]} aria-hidden="true">
        <defs>
          <radialGradient id="beamGrad1" cx="0%" cy="50%" r="100%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="50%"  stopColor="#00ccff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0088cc" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="beamGrad2" cx="0%" cy="50%" r="100%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#00aaff" stopOpacity="0" />
          </radialGradient>
          <filter id="beamGlow">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {beam && (
          <g filter="url(#beamGlow)">
            <polygon points={beamPoints} fill="url(#beamGrad1)" />
            <polygon points={beamPoints} fill="url(#beamGrad2)" opacity={0.5} />
          </g>
        )}

        {beam && reflX !== null && (
          <ellipse
            cx={reflX}
            cy={oceanY + 10}
            rx={40}
            ry={9}
            fill="rgba(0,200,255,0.2)"
            filter="url(#beamGlow)"
          />
        )}
      </svg>


      {/* Lighthouse */}
      <div className={styles["lh-wrap"]} aria-hidden="true">
        <LighthouseSVG />
      </div>


        <div
          className={styles["lh-cursor"]}
          style={{ left: mouse.x, top: mouse.y }}
          aria-hidden="true"
        />
  
    </div>
  );
}