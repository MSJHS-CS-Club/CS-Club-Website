import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Computer = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  useFrame(() => {
    gltf.scene.rotation.y += 0.005;
    gltf.scene.position.y = -0.7;
    gltf.scene.position.x = -0.2;
    gltf.scene.rotation.x = 0.5;
  });
  return (
    <>
      <primitive object={gltf.scene} scale={0.101} />
    </>
  );
};
