import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models//Lights.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Neon.geometry}
        // material={materials['Neon Purple']}
        position={[-0.86, -2.63, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#ff0000" roughness={1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/static/models//Lights.glb')
