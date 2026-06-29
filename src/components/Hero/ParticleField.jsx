import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ParticleField({ count = 120 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 1.5;
      a[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      a[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      a[i*3+2] = r * Math.cos(phi);
    }
    return a;
  }, [count]);

  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.04; });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#60A5FA" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}
