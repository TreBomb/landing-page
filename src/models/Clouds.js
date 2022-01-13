import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/static/models/Clouds.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Spin.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Clouds"
        geometry={nodes.Clouds.geometry}
        material={materials['Material.003']}
        rotation={[-2.76, 0.65, 0]}
        scale={[1.65, 1.65, 1.65]}
      />
    </group>
  )
}

useGLTF.preload('/static/models/Clouds.glb')
