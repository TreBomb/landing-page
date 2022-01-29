import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/static/models/Posters.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Posters" position={[-2.62, 2.67, 1.58]} rotation={[0.13, 0, 0]} scale={[1, 1, 2.04]}>
        <mesh geometry={nodes.Cube020.geometry} material={materials.Purple} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Cube020_2.geometry} material={materials.Cork} />
        <mesh geometry={nodes.Cube020_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cube020_4.geometry} material={materials.Note} />
        <mesh geometry={nodes.Cube020_5.geometry} material={materials.Green} />
        <mesh geometry={nodes.Cube020_6.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cube020_7.geometry} material={materials.Blue} />
        <mesh geometry={nodes.Cube020_8.geometry} material={materials.Red} />
        <mesh geometry={nodes.Cube020_9.geometry} material={materials.Black2} />
      </group>
    </group>
  )
}

useGLTF.preload('/static/models/Posters.glb')
