import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/static/models/Office.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Beep.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.15, -2.66, 0.5]} scale={[1, 0.08, 3.5]}>
        <mesh geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} castShadow recieveShadow />
        <mesh geometry={nodes.Cube007_1.geometry} material={nodes.Cube007_1.material} castShadow recieveShadow />
      </group>
      <group position={[0.59, -1.46, -2.4]} scale={[1, 1.07, 0.49]}>
        <mesh geometry={nodes.Cube014.geometry} material={nodes.Cube014.material} castShadow recieveShadow />
        <mesh geometry={nodes.Cube014_1.geometry} material={nodes.Cube014_1.material} castShadow recieveShadow />
        <mesh geometry={nodes.Cube014_2.geometry} material={materials['Neon Green']} castShadow recieveShadow />
        <mesh geometry={nodes.Cube014_3.geometry} material={materials.Black2} castShadow recieveShadow />
      </group>
      <mesh
        geometry={nodes.Wall.geometry}
        // material={materials.Wall}
        position={[-1.65, -3.15, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={22.61}
        recieveShadow
      >
        <meshStandardMaterial color="#89969c" roughness={1} />
      </mesh>
      <meshStandardMaterial color="#ff0000" roughness={1} />
      <mesh
        geometry={nodes.Neon.geometry}
        // material={materials['Neon Purple']}
        position={[-0.86, -2.63, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial color="#ff0000" roughness={1} />
      </mesh>
      <group position={[-1.28, 1.4, 0.6]} scale={[0.06, 0.22, 0.22]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Gray} castShadow recieveShadow />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials.Metal} castShadow recieveShadow />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.Screen} castShadow recieveShadow />
      </group>
      <group position={[-1.18, 0.49, 1.86]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.Text.geometry} material={materials.Text} >
        <meshStandardMaterial color="#9556e3" roughness={0} />
        </mesh>
        <mesh geometry={nodes.Text_1.geometry} material={nodes.Text_1.material} >
        <meshStandardMaterial color="#ffffff" roughness={0} />
        </mesh>
      </group>
      <mesh
        name="CLI"
        geometry={nodes.CLI.geometry}
        material={nodes.CLI.material}
        position={[-1.19, -1.81, 1.68]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.53}
      >
      <meshStandardMaterial color="#ffffff" roughness={0} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/static/models/Office.glb')
