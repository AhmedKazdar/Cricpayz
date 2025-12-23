import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Clouds, Cloud, Environment } from "@react-three/drei";

export default function Hero3DBackground() {
  return (
    <div className="hero_3d_background">
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 6, 6]} intensity={1.4} color="#e83c45" />
        <directionalLight position={[-6, -6, -6]} intensity={1.1} color="#292d65" />

        <Environment preset="sunset" />

        {/* MASSIVE CLOUD FIELD */}
        <Clouds
          speed={0.25}     // global movement speed
          opacity={0.5}    // global opacity
          depth={2}        // thickness of cloud layer
        >
          {/* Main big cloud */}
          <Cloud
            seed={1}
            bounds={[15, 12, 4]}   // MUCH bigger
            volume={20}           // more density
            segments={60}
            color="#e83c45"
            opacity={0.35}
            speed={0.4}
          />

          {/* Secondary blue cloud */}
          <Cloud
            seed={2}
            bounds={[18, 8, 5]}
            volume={25}
            segments={55}
            color="#292d65"
            opacity={0.4}
            speed={0.3}
            position={[0, -1, -2]}
          />

          {/* Soft background haze */}
          <Cloud
            seed={3}
            bounds={[20, 10, 6]}
            volume={30}
            segments={50}
            color="#ffffff"
            opacity={0.08}
            speed={0.15}
            position={[0, 1, -3]}
          />
        </Clouds>

        {/* Disable user interaction but keep subtle drift */}
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
