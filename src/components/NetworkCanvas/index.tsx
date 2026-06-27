// Core Dependencies
import { useEffect, useRef } from "react";

// Styles
import styles from "./index.module.scss";

interface IParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    op: number;
}

interface INetworkCanvas {
    speed?: number;
    particleCount?: number;
    connectionDistance?: number
}

const NetworkCanvas = ({
    speed = 0.45,
    particleCount = 75,
    connectionDistance = 145
}: INetworkCanvas) => {
    const rafRef = useRef<number | null>(null);
    const particlesRef = useRef<IParticle[]>([]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const rand = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
    }

    const createParticle = (width: number, height: number): IParticle => {
        return {
            x: rand(0, width),
            y: rand(0, height),
            vx: rand(-speed, speed) || 0.1,
            vy: rand(-speed, speed) || 0.1,
            r: rand(1.8, 3.8),
            op: rand(0.55, 1),
        };
    }

    const resize = (canvas: HTMLCanvasElement) => {
        const parent = canvas.parentElement;

        if (!parent) return;

        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        particlesRef.current = Array.from({ length: particleCount },
            () => createParticle(canvas.width, canvas.height)
        );
    };

    const draw = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D 
    ) => {
        const W = canvas.width;
        const H = canvas.height;
        const pts = particlesRef.current;

        ctx.clearRect(0, 0, W, H);

        // Vignette — azul oscuro suave
        const vig = ctx.createRadialGradient(
            W / 2,
            H / 2,
            H * 0.2,
            W / 2,
            H / 2,
            H * 0.9
        );
        vig.addColorStop(0, "rgba(0,20,50,0)");
        vig.addColorStop(1, "rgba(0,20,50,0.5)");
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, W, H);

        for (let i = 0; i < pts.length; i++) {
            const p = pts[i];

            // Speed cap
            const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (sp > speed * 2.8) {
                p.vx = (p.vx / sp) * speed * 2.8;
                p.vy = (p.vy / sp) * speed * 2.8;
            }

            // Move + bounce
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) { p.x = 0; p.vx *= -1; }
            else if (p.x > W) { p.x = W; p.vx *= -1; }
            
            if (p.y < 0) { p.y = 0; p.vy *= -1; }
            else if (p.y > H) { p.y = H; p.vy *= -1; }

            // Draw connections — azul ciencia abierta
            for (let j = i + 1; j < pts.length; j++) {
                const q = pts[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const d = Math.sqrt(dx * dx + dy * dy);

                if (d < connectionDistance) {
                    const alpha = (1 - d / connectionDistance) * 0.55;
                    const gradient = ctx.createLinearGradient(p.x, p.y, q.x, q.y);
                    // Azul primario #1A9FD8 → azul claro #7DD3F0
                    gradient.addColorStop(0, `rgba(26,159,216,${alpha})`);
                    gradient.addColorStop(1, `rgba(125,211,240,${alpha * 0.7})`);
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                }
            }

            // Glow halo — tono celeste
            const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4.5);
            glow.addColorStop(0, `rgba(26,159,216,${p.op * 0.55})`);
            glow.addColorStop(1, "rgba(0,90,160,0)");
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 4.5, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            // Core dot — blanco azulado
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200,235,255,${p.op})`;
            ctx.fill();
        }

        rafRef.current = requestAnimationFrame(() => draw(canvas, ctx));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        resize(canvas);
        window.addEventListener("resize", () => resize(canvas));
        draw(canvas, context);

        return () => {
            window.removeEventListener("resize", () => resize(canvas));
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className = {styles["network__canvas-container"]}>
            <canvas ref = {canvasRef} className = {styles["network__canvas"]} />
        </div>
    );
}

export default NetworkCanvas;