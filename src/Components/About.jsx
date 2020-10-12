import React from 'react';
import Common from './Common';
import web from '../about.png';

export default function About() {
  return (
    <>
      <Common name='About' imgsrc={web} visit='/contact' btname='Contact Now' />
    </>
  );
}
