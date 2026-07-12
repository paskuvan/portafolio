"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

function Blob() {
  const mesh = useRef();
  const target = useRef({ x: 0, y: 0 });

  useFrame(({ pointer, clock }) => {
    if (!mesh.current) return;
    // Ease the blob toward the pointer for a lazy, liquid follow.
    target.current.x += (pointer.x * 0.6 - target.current.x) * 0.04;
    target.current.y += (pointer.y * 0.4 - target.current.y) * 0.04;
    mesh.current.position.x = target.current.x;
    mesh.current.position.y = target.current.y;
    mesh.current.rotation.x = clock.elapsedTime * 0.12;
    mesh.current.rotation.y = clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={mesh} scale={2.1}>
        <icosahedronGeometry args={[1, 64]} />
        <MeshDistortMaterial
          color="#2b3bff"
          emissive="#0a0e66"
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.2}
          distort={0.42}
          speed={1.6}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * 0.25;
    mesh.current.rotation.y = clock.elapsedTime * 0.1;
  });
  return (
    <mesh ref={mesh} position={[2.6, -1.2, -1.5]} scale={1.1}>
      <torusGeometry args={[1, 0.28, 32, 96]} />
      <meshPhysicalMaterial
        color="#4a5aff"
        roughness={0.2}
        metalness={0.4}
        clearcoat={1}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-6, -3, 2]} intensity={30} color="#4a5aff" />
      <pointLight position={[5, -4, -3]} intensity={18} color="#8a94ff" />
      <Blob />
      <Ring />
    </Canvas>
  );
}
