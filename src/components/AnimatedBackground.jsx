import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import styles from './AnimatedBackground.module.css';

// Gravitational field lines - elegant curved lines showing spacetime curvature
function GravitationalField() {
  const groupRef = useRef();
  
  const fieldLines = useMemo(() => {
    const lines = [];
    const numLines = 24;
    
    for (let i = 0; i < numLines; i++) {
      const angle = (i / numLines) * Math.PI * 2;
      const points = [];
      
      for (let j = 0; j <= 60; j++) {
        const t = j / 60;
        const radius = 2 + t * 12;
        // Create curved field lines that bend toward center
        const curve = Math.sin(t * Math.PI) * 0.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = -curve * (1 - t) * 3; // Dip toward center
        points.push(new THREE.Vector3(x, y, z));
      }
      lines.push(points);
    }
    return lines;
  }, []);
  
  // Circular grid rings
  const gridRings = useMemo(() => {
    const rings = [];
    for (let r = 3; r <= 14; r += 2) {
      const points = [];
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        const dip = Math.max(0, 1 - r / 15) * 2;
        points.push(new THREE.Vector3(
          Math.cos(angle) * r,
          -dip,
          Math.sin(angle) * r
        ));
      }
      rings.push(points);
    }
    return rings;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.02;
  });

  return (
    <group ref={groupRef} position={[0, 2, 0]} rotation={[0.5, 0, 0]}>
      {/* Radial field lines */}
      {fieldLines.map((points, i) => (
        <line key={`radial-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#58c4dd" 
            transparent 
            opacity={0.06}
          />
        </line>
      ))}
      
      {/* Circular grid rings */}
      {gridRings.map((points, i) => (
        <line key={`ring-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial 
            color="#58c4dd" 
            transparent 
            opacity={0.08 - i * 0.008}
          />
        </line>
      ))}
      
      {/* Central mass glow */}
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial 
          color="#58c4dd" 
          transparent 
          opacity={0.15}
        />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial 
          color="#83d9e8" 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// Orbiting particles - bodies following gravitational paths
function OrbitingParticles() {
  const particlesRef = useRef([]);
  
  const orbits = useMemo(() => {
    return [
      { radius: 4, speed: 0.4, phase: 0, y: 0.5, size: 0.08, opacity: 0.7 },
      { radius: 5.5, speed: 0.3, phase: Math.PI * 0.5, y: 0.3, size: 0.06, opacity: 0.6 },
      { radius: 7, speed: 0.22, phase: Math.PI, y: 0.1, size: 0.1, opacity: 0.5 },
      { radius: 9, speed: 0.15, phase: Math.PI * 1.5, y: -0.1, size: 0.05, opacity: 0.4 },
      { radius: 11, speed: 0.1, phase: Math.PI * 0.3, y: -0.3, size: 0.07, opacity: 0.3 },
    ];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    particlesRef.current.forEach((mesh, i) => {
      if (mesh) {
        const orbit = orbits[i];
        const angle = time * orbit.speed + orbit.phase;
        mesh.position.x = Math.cos(angle) * orbit.radius;
        mesh.position.z = Math.sin(angle) * orbit.radius;
        mesh.position.y = orbit.y + 2;
      }
    });
  });

  return (
    <group rotation={[0.5, 0, 0]}>
      {orbits.map((orbit, i) => (
        <mesh 
          key={i} 
          ref={el => particlesRef.current[i] = el}
        >
          <sphereGeometry args={[orbit.size, 16, 16]} />
          <meshBasicMaterial 
            color="#58c4dd" 
            transparent 
            opacity={orbit.opacity}
          />
        </mesh>
      ))}
    </group>
  );
}

// Ambient floating particles - subtle dust in space
function AmbientParticles({ count = 150 }) {
  const meshRef = useRef();
  
  const [positions, opacities] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const opacities = [];
    
    for (let i = 0; i < count; i++) {
      // Distribute in a large sphere around the scene
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 8 + Math.random() * 20;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) - 5;
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      opacities.push(Math.random() * 0.3 + 0.1);
    }
    
    return [positions, opacities];
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const posArray = meshRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      // Gentle floating motion
      posArray[i * 3 + 1] += Math.sin(time * 0.2 + i) * 0.001;
    }
    
    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.01;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#58c4dd"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Distant stars
function Stars({ count = 200 }) {
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 30 + Math.random() * 20;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    
    return positions;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

// Feynman quote
function FeynmanQuote() {
  return (
    <motion.div 
      className={styles.feynmanQuote}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
    >
      <span className={styles.quoteText}>"What I cannot create, I do not understand."</span>
      <span className={styles.quoteAuthor}>— Richard Feynman</span>
    </motion.div>
  );
}

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <div className={styles.background}>
      {mounted && (
        <Canvas
          camera={{ position: [0, 8, 18], fov: 50 }}
          style={{ position: 'absolute', inset: 0 }}
          gl={{ alpha: true, antialias: true }}
        >
          <color attach="background" args={['#0a0a14']} />
          <fog attach="fog" args={['#0a0a14', 20, 50]} />
          
          <ambientLight intensity={0.3} />
          
          <GravitationalField />
          <OrbitingParticles />
          <AmbientParticles count={100} />
          <Stars count={150} />
        </Canvas>
      )}
      <FeynmanQuote />
    </div>
  );
}
