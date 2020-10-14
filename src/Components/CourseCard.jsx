import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CourseCard(props) {
  return (
    <>
      <div className='col-md-2 col-10 mx-auto'>
        <div className='card'>
          <img src={props.imgsrc} className='card-img-top' alt={props.imgsrc} />
          <div className='card-body'>
            <h5 className='card-title font-weight-bold'>{props.title}</h5>
            <p className='card-text'></p>
            <NavLink to='/' className='btn btn-primary'>
              Continue Studying
            </NavLink>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
