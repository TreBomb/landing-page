import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models/PC.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.59, -1.46, -2.4]} scale={[1, 1.07, 0.49]}>
        <mesh geometry={nodes.Cube014.geometry} material={materials.White} />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Cube014_2.geometry} material={materials['Neon Green']} />
        <mesh geometry={nodes.Cube014_3.geometry} material={materials.Black2} />
        <mesh geometry={nodes.Cube014_4.geometry} material={materials.Gray} />
      </group>
    </group>
  )
}

useGLTF.preload('/static/models/PC.glb')
