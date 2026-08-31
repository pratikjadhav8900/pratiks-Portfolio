/* eslint-disable react/no-unknown-property */
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CharacterController from "./CharacterController";
import { AnimationState } from "./CharacterAnimations";

interface Pratik3DProps {
  animation?: AnimationState;
  interactive?: boolean;
  navHover?: string | null;
  mousePosition?: { x: number; y: number };
}

export default function Pratik3D({
  animation = "idle",
  interactive = true,
  navHover = null,
  mousePosition = { x: 0, y: 0 },
}: Pratik3DProps) {
  return (
    <div className="three-stage" aria-label="Interactive 3D Pratik Character">
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 32 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[3, 5, 4]} intensity={2.8} />
        <directionalLight position={[-3, 2, 1]} intensity={1.2} />
        <directionalLight position={[0, -2, -2]} intensity={0.6} color="#d90429" />

        <CharacterController
          animation={animation}
          interactive={interactive}
          navHover={navHover}
          mousePosition={mousePosition}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={1.2}
          maxPolarAngle={1.8}
          minAzimuthAngle={-0.35}
          maxAzimuthAngle={0.35}
        />
      </Canvas>
    </div>
  );
}