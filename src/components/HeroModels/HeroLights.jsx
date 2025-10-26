import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={2} /> */}

      {/* lamp's light */}
      <spotLight
        position={[2, 8, 6]}
        intensity={200}
        angle={0.1}
        penumbra={0.2}
        color="#FFD580"
        // color="white"
      />

      {/* bluish overhead lamp */}
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
      />

      {/* purplish side fill */}
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
      />

      {/* area light for soft moody fill */}
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* subtle point light for atmospheric tone */}
      {/* <pointLight
      position={[0,1,0]}
      intensity={10}
      color="#e6d8d8"
      // color="#7209b7"
      /> */}

      {/* <pointLight
      position={[1, Math.PI / -2.5, Math.PI / -4]}
      // position={[1,2,-2]}
         angle={0.15}
      penumbra={0.5}
      intensity={5}
      color="#efefef"
      // color="#0d00a4"
      /> */}
      {/* monitor screen light */}
      <spotLight
        // position={[-5, 12, 5]}
        position={new THREE.Vector3(0.8, 7, -2)}
        intensity={100}
        angle={0.25}
        penumbra={0.5}
        color="#efefef"
        castShadow
        target-position={[2, 7, 6]}
      />

      {/* Room light */}
        <spotLight
        position={[-3, 5, 5]}
        intensity={40}
        angle={0.7}
        penumbra={1}
        color="white"
      />
    </>
  );
};

export default HeroLights;
