import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
//import main from  '../../assets/main.png';

const Computers = ({isMobile}) => {
   const computer =useGLTF('./desktop_pc/scene.gltf')
        
    return (
    <mesh>
          <hemisphereLight intensity={0.15}
                  groundColor="black"
          />
          <spotLight 
                position={[-20,50,10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
          />
          <pointLight intensity={1} />
          <primitive object={computer.scene} 
                      scale={isMobile ? 0.7 : 0.75} 
                      position={isMobile ? [0,-3,-2.2] : [0,-3.75,-1.5]}
                      rotation={[-0.01, -0.2, -0.1]}
                      />
    </mesh>
  )
}

const ComputersCanvas=()=>{
  const[mobile , setIsmobile]=useState(false)
  useEffect(()=>{
      const mediaQuery=window.matchMedia('(max-width:500px)' );

      setIsmobile(mediaQuery.matches);

      const handleMediaQueryChange=(event)=>{
              setIsmobile(event.matches);
      }

      mediaQuery.addEventListener('change',handleMediaQueryChange);
      return ()=>{
        mediaQuery.removeEventListener('change',handleMediaQueryChange)
      }
  },[])

  return (
        //  <Canvas
        //      frameloop="demand"
        //      shadows
        //      dpr={[1,2]}
        //      camera={{position:[20,3,5],fov:25}}
        //      gl={{preserveDrawingBuffer:true}}
        //  >
        //     <Suspense fallback={<CanvasLoader/>}>
        //       <OrbitControls 
        //            enableZoom={false} 
        //            maxPolarAngle={Math.PI/2}
        //            minPolarAngle={Math.PI/2}
        //       />
        //       <Computers isMobile={mobile}/>
        //     </Suspense> 
        //     <Preload all/>
        // </Canvas>

        <div className="mt-10 w-52"  >
        
         {/* <img src={main} style={{clipPath:`circle(50% at 50% 50%)`}} className="opacity-100"/> */}
        </div>
        
        )
}

export default ComputersCanvas