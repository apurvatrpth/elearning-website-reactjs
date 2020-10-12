import React from 'react';
import Common from './Common';
import web from '../home.png';

export default function Home() {
  return (
    <>
      <Common
        name='Welcome to'
        imgsrc={web}
        visit='/service'
        btname='Get Started'
      />
    </>
  );
}
