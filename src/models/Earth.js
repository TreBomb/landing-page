import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/static/Earth.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Earth" rotation={[0.39, 0.65, 0]} scale={1.35}>
        <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Sphere_1.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/static/models/Earth.glb')
