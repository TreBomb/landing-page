import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models/Parts.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Components" position={[0.25, -0.88, -2.52]} scale={[0.12, 0.13, 0.11]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/static/models/Parts.glb')
