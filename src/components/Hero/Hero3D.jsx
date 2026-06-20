import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import ParticleField from './ParticleField';

function TorusKnot({ mousePos }) {
  const meshRef = useRef();
  const wireRef = useRef();
  const { size } = useThree();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;

    if (mousePos.current) {
      const targetX = (mousePos.current.y / size.height - 0.5) * 0.3;
      const targetY = (mousePos.current.x / size.width - 0.5) * 0.3;
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.05;
    }

    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshStandardMaterial
          color="#7A3FD0"
          emissive="#915EFF"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh ref={wireRef}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshBasicMaterial color="#00D9FF" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Scene({ mousePos }) {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} color="#915EFF" intensity={2.0} />
      <pointLight position={[-3, -3, -3]} color="#00D9FF" intensity={1.5} />
      <TorusKnot mousePos={mousePos} />
      <ParticleField count={150} />
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
      </EffectComposer>
    </>
  );
}

export default function Hero3D({ mousePos }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene mousePos={mousePos} />
    </Canvas>
  );
}
