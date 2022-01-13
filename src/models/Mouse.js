import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models/Mouse.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mouse.geometry}
        material={materials.Black}
        position={[0.59, -1.46, -2.4]}
        scale={[1, 1.07, 0.49]}
      />
    </group>
  )
}

useGLTF.preload('/static/models/Mouse.glb')
