import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models/Wall.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry} material={materials.Wall} />
      <mesh geometry={nodes.Plane001_1.geometry} material={materials.Metal} />
    </group>
  )
}

useGLTF.preload('/static/models/Wall.glb')
