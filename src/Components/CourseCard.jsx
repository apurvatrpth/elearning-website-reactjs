import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function CourseCard(props) {
  const DeleteCourse = (e) => {
    e.preventDefault();

    const serialNo = localStorage.getItem('serialNo');

    axios({
      method: 'delete',
      url: `http://localhost:8080/api/clist/delete/${serialNo}/${props.title}`,
    })
      .then(() => {
        alert(`${props.title} deleted`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
            <br />
            <br />
            <button onClick={DeleteCourse} className='btn btn-primary'>
              Delete Course
            </button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
