import React from 'react';
import Card from './Card';
import { Courses } from './CourseList';

export default function Service(props) {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center' style={{ color: '#484848' }}>
          Our Courses
        </h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {Courses.map((item, ind) => {
                return (
                  <Card key={ind} imgsrc={item.imgsrc} title={item.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
