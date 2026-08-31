/* eslint-disable react/no-unknown-property */
"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { AnimationState, ANIMATION_CONFIGS } from "./CharacterAnimations";

interface CharacterControllerProps {
  animation: AnimationState;
  interactive?: boolean;
  navHover?: string | null;
  mousePosition?: { x: number; y: number };
}

// Model loader component for public/models/pratik.glb
function GLBCharacterModel({
  modelUrl,
  animation,
  mousePosition,
  interactive,
}: {
  modelUrl: string;
  animation: AnimationState;
  mousePosition?: { x: number; y: number };
  interactive?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, group);
  const activeAction = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    const config = ANIMATION_CONFIGS[animation] || ANIMATION_CONFIGS.idle;
    const actionName = config.clipName;
    const newAction = actions[actionName] || actions[Object.keys(actions)[0]];

    if (newAction && newAction !== activeAction.current) {
      if (activeAction.current) {
        activeAction.current.fadeOut(config.fadeDuration);
      }
      newAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .fadeIn(config.fadeDuration)
        .play();

      if (!config.loop) {
        newAction.clampWhenFinished = true;
        newAction.loop = THREE.LoopOnce;
      } else {
        newAction.loop = THREE.LoopRepeat;
      }

      activeAction.current = newAction;
    }
  }, [animation, actions]);

  useFrame((state, delta) => {
    if (!group.current || !interactive || !mousePosition) return;
    const targetRotY = THREE.MathUtils.clamp(mousePosition.x * 0.2, -0.25, 0.25);
    const targetRotX = THREE.MathUtils.clamp(-mousePosition.y * 0.12, -0.15, 0.15);

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetRotY,
      3,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetRotX,
      3,
      delta
    );
  });

  return <primitive ref={group} object={scene} position={[0, -1.0, 0]} scale={0.85} />;
}

// Temporary development fallback placeholder
function ProceduralFallbackModel({
  animation,
  mousePosition,
  interactive,
  navHover,
}: CharacterControllerProps) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const leftLeg = useRef<THREE.Group>(null);
  const rightLeg = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const isDance = animation === "dance";
    const isWave = animation === "wave" || navHover === "contact";
    const isPoint = animation === "point" || navHover === "work";
    const isLookNav = navHover === "about";

    const speed = isDance ? 4.2 : 1.2;

    // Body motion
    if (root.current) {
      const targetY = isDance ? Math.abs(Math.sin(t * speed)) * 0.1 - 0.95 : -0.95;
      const targetRotY = isLookNav
        ? -0.2
        : interactive && mousePosition
        ? THREE.MathUtils.clamp(mousePosition.x * 0.2, -0.3, 0.3)
        : Math.sin(t * 0.6) * 0.04;

      root.current.position.y = THREE.MathUtils.damp(root.current.position.y, targetY, 4, delta);
      root.current.rotation.y = THREE.MathUtils.damp(root.current.rotation.y, targetRotY, 4, delta);
    }

    if (head.current && interactive && mousePosition) {
      const targetHeadX = THREE.MathUtils.clamp(-mousePosition.y * 0.15, -0.2, 0.15);
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, targetHeadX, 4, delta);
    }

    if (body.current) {
      const targetZ = isDance ? Math.sin(t * speed) * 0.06 : 0;
      body.current.rotation.z = THREE.MathUtils.damp(body.current.rotation.z, targetZ, 4, delta);
    }

    // Left Arm
    if (leftArm.current) {
      let targetZ = -0.3;
      let targetX = 0;
      if (isDance) {
        targetZ = -0.45 + Math.sin(t * speed) * 0.4;
        targetX = Math.cos(t * speed * 0.5) * 0.25;
      } else if (isWave) {
        targetZ = -1.5 + Math.sin(t * 8) * 0.2;
        targetX = 0.25;
      }
      leftArm.current.rotation.z = THREE.MathUtils.damp(leftArm.current.rotation.z, targetZ, 5, delta);
      leftArm.current.rotation.x = THREE.MathUtils.damp(leftArm.current.rotation.x, targetX, 5, delta);
    }

    // Right Arm
    if (rightArm.current) {
      let targetZ = 0.3;
      let targetX = 0;
      if (isDance) {
        targetZ = 0.45 - Math.sin(t * speed) * 0.4;
        targetX = -Math.cos(t * speed * 0.5) * 0.25;
      } else if (isPoint) {
        targetZ = 0.18;
        targetX = -1.3;
      }
      rightArm.current.rotation.z = THREE.MathUtils.damp(rightArm.current.rotation.z, targetZ, 5, delta);
      rightArm.current.rotation.x = THREE.MathUtils.damp(rightArm.current.rotation.x, targetX, 5, delta);
    }

    // Legs
    if (leftLeg.current && rightLeg.current) {
      const leftZ = isDance ? Math.sin(t * speed) * 0.14 : 0;
      const rightZ = isDance ? -Math.sin(t * speed) * 0.14 : 0;
      leftLeg.current.rotation.z = THREE.MathUtils.damp(leftLeg.current.rotation.z, leftZ, 4, delta);
      rightLeg.current.rotation.z = THREE.MathUtils.damp(rightLeg.current.rotation.z, rightZ, 4, delta);
    }
  });

  return (
    <group ref={root} position={[0, -0.95, 0]} scale={0.72}>
      <group ref={body}>
        {/* Dark Shirt / Top */}
        <mesh position={[0, 0.65, 0]}>
          <capsuleGeometry args={[0.55, 1.15, 12, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.65} />
        </mesh>

        {/* Head Group */}
        <group ref={head} position={[0, 1.65, 0]}>
          {/* Face / Skin */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.58, 32, 24]} />
            <meshStandardMaterial color="#c68a68" roughness={0.45} />
          </mesh>

          {/* Textured Dark Curly Hair */}
          <group position={[0, 0.25, 0]}>
            <mesh position={[0, 0.28, -0.04]} scale={[1.02, 0.65, 1.0]}>
              <sphereGeometry args={[0.59, 24, 16]} />
              <meshStandardMaterial color="#120e0d" roughness={0.9} />
            </mesh>
            {[-0.3, 0, 0.3].map((x, i) => (
              <mesh key={i} position={[x, 0.52, 0.08]} scale={0.18}>
                <sphereGeometry args={[1, 12, 12]} />
                <meshStandardMaterial color="#191311" roughness={0.85} />
              </mesh>
            ))}
          </group>

          {/* Black Glasses */}
          <group position={[0, 0.04, 0.5]}>
            <mesh position={[-0.24, 0, 0]}>
              <torusGeometry args={[0.16, 0.032, 12, 24]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[0.24, 0, 0]}>
              <torusGeometry args={[0.16, 0.032, 12, 24]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[0, 0.02, -0.02]}>
              <boxGeometry args={[0.16, 0.03, 0.03]} />
              <meshStandardMaterial color="#0a0a0a" />
            </mesh>
          </group>

          {/* Beard / Mustache */}
          <mesh position={[0, -0.25, 0.46]} scale={[0.5, 0.3, 0.16]}>
            <sphereGeometry args={[0.48, 24, 16]} />
            <meshStandardMaterial color="#1c1613" roughness={0.85} />
          </mesh>

          {/* Gold Earring accent */}
          <mesh position={[-0.58, -0.04, 0]} rotation={[0, 0, 0.4]}>
            <torusGeometry args={[0.05, 0.012, 8, 16]} />
            <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>

        {/* Arms */}
        <group ref={leftArm} position={[-0.65, 0.85, 0]}>
          <mesh rotation={[0, 0, 0.12]} position={[-0.15, -0.22, 0]}>
            <capsuleGeometry args={[0.13, 0.8, 10, 14]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.65} />
          </mesh>
        </group>
        <group ref={rightArm} position={[0.65, 0.85, 0]}>
          <mesh rotation={[0, 0, -0.12]} position={[0.15, -0.22, 0]}>
            <capsuleGeometry args={[0.13, 0.8, 10, 14]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.65} />
          </mesh>
        </group>

        {/* Cargo Pants (Beige / Light) */}
        <group ref={leftLeg} position={[-0.25, -0.3, 0]}>
          <mesh position={[0, -0.55, 0]}>
            <capsuleGeometry args={[0.19, 1.1, 10, 14]} />
            <meshStandardMaterial color="#d1c6b4" roughness={0.7} />
          </mesh>
        </group>
        <group ref={rightLeg} position={[0.25, -0.3, 0]}>
          <mesh position={[0, -0.55, 0]}>
            <capsuleGeometry args={[0.19, 1.1, 10, 14]} />
            <meshStandardMaterial color="#d1c6b4" roughness={0.7} />
          </mesh>
        </group>

        {/* White / Black Sneakers */}
        <mesh position={[-0.26, -1.35, 0.1]} scale={[0.32, 0.15, 0.55]}>
          <sphereGeometry args={[1, 20, 12]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
        </mesh>
        <mesh position={[0.26, -1.35, 0.1]} scale={[0.32, 0.15, 0.55]}>
          <sphereGeometry args={[1, 20, 12]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Error Boundary wrapper for GLB loader
class GLBErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function CharacterController(props: CharacterControllerProps) {
  const [hasGLBAsset, setHasGLBAsset] = useState<boolean>(false);
  const glbUrl = "/models/pratik.glb";

  useEffect(() => {
    fetch(glbUrl, { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.headers.get("content-type")?.includes("octet-stream")) {
          setHasGLBAsset(true);
        } else {
          setHasGLBAsset(false);
        }
      })
      .catch(() => setHasGLBAsset(false));
  }, []);

  if (hasGLBAsset) {
    return (
      <GLBErrorBoundary fallback={<ProceduralFallbackModel {...props} />}>
        <GLBCharacterModel modelUrl={glbUrl} {...props} />
      </GLBErrorBoundary>
    );
  }

  return <ProceduralFallbackModel {...props} />;
}
