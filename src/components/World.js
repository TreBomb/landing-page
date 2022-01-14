// Dependencies
import React, { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
// import * as dat from 'lil-gui'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'

// Models
import Office from '../models/Office'
import Lights from '../models/Lights'
import Mouse from '../models/Mouse'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02)) // .lerp(vec.set(mouse.x * 2, mouse.y * 1, camera.position.z), 0.02)
}

// let isTouchDevice = 'ontouchstart' in document.documentElement
// let control
// if ( isTouchDevice ) {
//   // do mobile handling
//     control = {MIDDLE: THREE.MOUSE.ROTATE}
// } else {
//   // do default handling
//   control = {MIDDLE: THREE.MOUSE.ROTATE}
// }

const Scene = () => {
    const [pos, setPos] = useState()
    const officeRef = React.createRef()


    return (
        <Canvas
        style={{ background: '#ffffff' }} //#bb86fc
        colorManagement
        shadowMap
        >
            <ambientLight intensity={0.2} />
            <directionalLight castShadow position={[2.5, 12, 12]} intensity={3} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
            <pointLight position={[20, 20, 20]} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
            <pointLight position={[-20, -20, -20]} intensity={3} castShadow shadow-mapSize-height={512} shadow-mapSize-width={512} />
            <Office rotation={[0, -1.5708, 0]} position={[1.45, 0.6, 0.1]} />
            <Lights rotation={[0, -1.5708, 0]} position={[1.45, 0.6, 0.1]} />
            <Mouse rotation={[0, -1.5708, 0]} position={[1.45, 0.6, 0.1]} />
            <Suspense fallback={null}>
            </Suspense>
            <Rig />
        </Canvas>
    )
}

export default Scene