import { useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import computerScene from "../../assets/3d/laptop_model_black.glb"; // Make sure the path to the model is correct
import CanvasLoader from "../Loader";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Computer = ({ scale, position, rotationX, rotationY }) => {
  const computerRef = useRef();
  const { scene, animations } = useGLTF(computerScene); // Load the GLTF model
  const { actions } = useAnimations(animations, computerRef); // Handle animations

  useEffect(() => {
    actions["Idle"]?.play(); // Start the animation once loaded
  }, [actions]);

  return (
    <mesh ref={computerRef} position={position} scale={scale} rotation={[rotationX, rotationY, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

const ComputerCanvas = ({ scrollContainer }) => {
  const [rotationX, setRotationX] = useState(0); // Store rotation X
  const [rotationY, setRotationY] = useState(0); // Store rotation Y
  const [scale, setScale] = useState([1.5, 2.0, 2.0]); // Initial scale
  const [position, setPosition] = useState([-2.0, -1.5, 0]); // Initial position

  // Handle scroll events to rotate the model
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainer.current.scrollTop;
      const rotationXValue = scrollTop * 1.06;
      const rotationYValue = scrollTop * -1.075;
      setRotationX(rotationXValue);
      setRotationY(rotationYValue);
    };

    // Adjust the scale and position based on window resize
    const handleResize = () => {
     if (window.innerWidth < 768) {
    setScale([0.15, 0.2, 0.2]);  // Smaller scale for small screens
    setPosition([0.3, -0.1, 0]);  // More centered position
} else if (window.innerWidth < 1024) {
    setScale([0.25, 0.3, 0.3]);  // Slightly larger for medium screens
    setPosition([0.25, -0.2, 0]);  // Slightly adjusted position
} else if (window.innerWidth < 1280) {
    setScale([0.4, 0.5, 0.5]);  // Increasing scale for larger screens
    setPosition([0.15, -0.3, 0]);  // Position adjustment for balance
} else if (window.innerWidth < 1536) {
    setScale([1.0, 1.25, 1.25]);  // Closer to your large scale, but scaled down
    setPosition([-0.5, -0.75, 0]);  // Adjusted position for large screens
} else {
    setScale([2.0, 3.0, 3.0]);    // Largest scale for very wide screens
    setPosition([-2.0, -1.5, 0]); // Extreme position for very large screens
}
      };

    handleResize(); // Adjust on load
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollContainer]);

  return (
    <Canvas className={`w-full h-screen bg-transparent z-10`} camera={{ near: 0.1, far: 1000, position: [16, 2, 0] }}>
      <Suspense fallback={<CanvasLoader />}>
        {/* Lights */}
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[7, -15, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#1d284d" groundColor="#000000" intensity={1} />

        {/* 3D Computer model */}
        <Computer 
          rotationX={rotationX} 
          rotationY={rotationY} 
          scale={scale} 
          position={position} 
        />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
