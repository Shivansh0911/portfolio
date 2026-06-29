import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import ParticleField from './ParticleField';

function TorusKnot({ mousePos }) {
  const mesh = useRef(); const wire = useRef();
  const { size } = useThree();

  useFrame((_, d) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += d * 0.12;
    mesh.current.rotation.y += d * 0.18;
    if (mousePos.current) {
      const tx = (mousePos.current.y / size.height - 0.5) * 0.25;
      const ty = (mousePos.current.x / size.width - 0.5) * 0.25;
      mesh.current.rotation.x += (tx - mesh.current.rotation.x) * 0.04;
      mesh.current.rotation.y += (ty - mesh.current.rotation.y) * 0.04;
    }
    if (wire.current) wire.current.rotation.copy(mesh.current.rotation);
  });

  return (
    <group>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshStandardMaterial color="#92400E" emissive="#F59E0B" emissiveIntensity={0.6} roughness={0.15} metalness={0.9} />
      </mesh>
      <mesh ref={wire}>
        <torusKnotGeometry args={[1, 0.3, 200, 32]} />
        <meshBasicMaterial color="#FBBF24" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function Hero3D({ mousePos }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} color="#F59E0B" intensity={2} />
      <pointLight position={[-3, -3, -2]} color="#34D399" intensity={1.2} />
      <TorusKnot mousePos={mousePos} />
      <ParticleField count={120} />
      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.25} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Canvas>
  );
}
