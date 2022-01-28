import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/static/models/Fan1.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Fan1Spin.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Fan1"
        geometry={nodes.Fan1.geometry}
        material={materials.Black2}
        position={[-0.31, -0.79, -2.3]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.21, 0.03, 0.01]}
      />
    </group>
  )
}

useGLTF.preload('/static/models/Fan1.glb')
