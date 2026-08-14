"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Html } from "@react-three/drei";
import * as THREE from "three";

interface SatelliteNode {
  id: string;
  name: string;
  sectionId: string;
  pos: [number, number, number];
  color: string;
}

const SATELLITES: SatelliteNode[] = [
  { id: "skills", name: "skills_agent", sectionId: "skills", pos: [-3.8, 1.8, -1], color: "#4FD8E8" },
  { id: "experience", name: "experience_agent", sectionId: "experience", pos: [3.8, 1.5, -1.2], color: "#F2A65A" },
  { id: "projects", name: "projects_agent", sectionId: "projects", pos: [-3.2, -2.2, -1], color: "#4FD8E8" },
  { id: "contact", name: "contact_agent", sectionId: "contact", pos: [3.4, -2.0, -0.8], color: "#F2A65A" },
  { id: "llmops", name: "llmops_eval", sectionId: "achievements", pos: [0, 3.2, -1.5], color: "#4FD8E8" },
];

// Central Orchestrator Core Node
function CoreNode() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered ? 1.2 : 0.4);
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y -= delta * (hovered ? 0.8 : 0.2);
      outerRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Glowing Wireframe Shell */}
      <mesh
        ref={outerRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[hovered ? 1.8 : 1.6, 2]} />
        <meshBasicMaterial
          color={hovered ? "#F2A65A" : "#4FD8E8"}
          wireframe
          transparent
          opacity={hovered ? 0.6 : 0.35}
        />
      </mesh>

      {/* Inner Core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial
          color="#131A22"
          emissive={hovered ? "#F2A65A" : "#4FD8E8"}
          emissiveIntensity={hovered ? 1.2 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Point lights */}
      <pointLight color="#4FD8E8" intensity={hovered ? 5 : 3} distance={10} />
      <pointLight color="#F2A65A" intensity={hovered ? 4 : 2} distance={8} position={[2, 2, 2]} />
    </group>
  );
}

// Satellite Nodes with 3D Hover & Click Dispatch
function SatelliteGraph() {
  const groupRef = useRef<THREE.Group>(null!);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Scroll offset state inside Three.js frame
  const scrollOffsetRef = useRef(0);
  const targetRotationRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollOffsetRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Mouse tracking interpolation
      const targetMouseX = state.pointer.x * 0.4;
      const targetMouseY = state.pointer.y * 0.3;

      // Scroll interpolation (rotates 3D scene as user scrolls down page)
      const scrollRotationY = scrollOffsetRef.current * Math.PI * 1.5;
      const scrollRotationX = Math.sin(scrollOffsetRef.current * Math.PI) * 0.4;

      targetRotationRef.current.y = THREE.MathUtils.lerp(
        targetRotationRef.current.y,
        scrollRotationY + targetMouseX,
        0.05
      );
      targetRotationRef.current.x = THREE.MathUtils.lerp(
        targetRotationRef.current.x,
        scrollRotationX - targetMouseY,
        0.05
      );

      groupRef.current.rotation.y = targetRotationRef.current.y;
      groupRef.current.rotation.x = targetRotationRef.current.x;

      // Dynamic depth translation based on scroll
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        -scrollOffsetRef.current * 3,
        0.05
      );
    }
  });

  const handleNodeClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <group ref={groupRef}>
      <CoreNode />

      {SATELLITES.map((sat) => {
        const isHovered = hoveredId === sat.id;

        return (
          <group key={sat.name}>
            {/* Connector Line to Central Node */}
            <Line
              points={[[0, 0, 0], sat.pos]}
              color={isHovered ? "#F2A65A" : sat.color}
              lineWidth={isHovered ? 3 : 1.5}
              transparent
              opacity={isHovered ? 0.9 : 0.3}
              dashed
              dashScale={5}
              dashSize={0.5}
            />

            {/* Satellite Floating Node */}
            <Float speed={3} rotationIntensity={0.6} floatIntensity={1}>
              <mesh
                position={sat.pos}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  setHoveredId(sat.id);
                  document.body.style.cursor = "pointer";
                }}
                onPointerOut={() => {
                  setHoveredId(null);
                  document.body.style.cursor = "auto";
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick(sat.sectionId);
                }}
              >
                <sphereGeometry args={[isHovered ? 0.48 : 0.35, 24, 24]} />
                <meshStandardMaterial
                  color="#131A22"
                  emissive={isHovered ? "#F2A65A" : sat.color}
                  emissiveIntensity={isHovered ? 1.5 : 0.8}
                  roughness={0.2}
                />

                {/* 3D Label Overlay */}
                {isHovered && (
                  <Html position={[0, 0.6, 0]} center distanceFactor={10}>
                    <div className="bg-[#131A22]/95 text-[#4FD8E8] border border-[#4FD8E8]/60 px-2.5 py-1 rounded font-mono text-[10px] whitespace-nowrap shadow-[0_0_15px_rgba(79,216,232,0.4)] pointer-events-none flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F2A65A] animate-ping"></span>
                      DISPATCH → #{sat.sectionId.toUpperCase()}
                    </div>
                  </Html>
                )}
              </mesh>
            </Float>
          </group>
        );
      })}

      {/* Dynamic Scroll & Mouse Interactive Particle System */}
      <InteractiveParticles />
    </group>
  );
}

// Particle Constellation reacting to mouse move & scroll velocity
function InteractiveParticles() {
  const count = 120;
  const initialPositions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Swirl particles in response to mouse pointer
      pointsRef.current.rotation.y += delta * 0.08 + state.pointer.x * 0.005;
      pointsRef.current.rotation.x += delta * 0.03 - state.pointer.y * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[initialPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#4FD8E8"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function OrchestratorScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, isMobile ? 10.5 : 7.5], fov: isMobile ? 55 : 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#4FD8E8" />
        <SatelliteGraph />
      </Canvas>
    </div>
  );
}
