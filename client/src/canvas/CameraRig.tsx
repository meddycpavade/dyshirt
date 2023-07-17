import React, { useRef } from 'react';
import {easing} from 'maath';
import state from '../store';
import {useSnapshot} from 'valtio';
import {useFrame} from '@react-three/fiber';

const CameraRig = ({children}) => {
  const group : object = useRef();
  console.log('test: ', typeof(group));
  
  const snap : any = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint : boolean = window.innerWidth <= 1260;
    const isMobile : boolean = window.innerWidth <= 600;

    //settig the initial position of the model
    let targetPosition : number[] = [-0.4, 0, 2];
    if(snap?.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2];
      if(isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if(isMobile) targetPosition = [0, 0.2, 2.5];
      else targetPosition = [0, 0, 2]; 
    }

    //setting model camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // setting the model rotation to be smooth
    easing.dampE(group?.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta)
  });

  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig;