// Dependencies
import React, { Suspense, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
// import * as dat from 'lil-gui'
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useGLTF } from '@react-three/drei/core/useGLTF'

// Models
import Clouds from '../models/Clouds'
import Earth from '../models/Earth'

extend({ OrbitControls })

// let isTouchDevice = 'ontouchstart' in document.documentElement
// let control
// if ( isTouchDevice ) {
//   // do mobile handling
//     control = {MIDDLE: THREE.MOUSE.ROTATE}
// } else {
//   // do default handling
//   control = {MIDDLE: THREE.MOUSE.ROTATE}
// }

const CameraControls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree()
    const controls = useRef()
    useFrame((state) => controls.current.update())
    return (
        <orbitControls
          ref={controls}
          args={[camera, domElement]}
          enableDamping = {true}
          mouseButtons = {{
            MIDDLE: THREE.MOUSE.ROTATE
          }}
        />
      )
  }

const Scene = () => {
    const [pos, setPos] = useState()
    const cloudsRef = React.createRef()

    // useEffect(() => {
    //     Movement(pos)
    // }, [pos])


    return (
        <Canvas style={{ background: '#7cbae6' }}>
            <ambientLight intensity={0.9} />
            <spotLight intensity={0.9} angle={.4} penumbra={1} position={[100, 15, 100]} castShadow />
            <Suspense fallback={null}>
            <Clouds
            // ref={this.cloudsRef}
            onClick={(e) => { console.log(e) }}
            castShadow
            />
            {/* <Earth
            position={[-90, 5.4, 50]}
            scale={[3, 3, 3]}
            castShadow
            // onClick={(e) => Movement.js(e.point, cloudsRef)}
            onClick={(e) => { console.log(e.point) }}
            /> */}
            </Suspense>
            <CameraControls />
        </Canvas>
    )
}

export default Scene