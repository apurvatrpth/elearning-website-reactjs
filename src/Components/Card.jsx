import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Card(props) {
  const history = useHistory();

  const addCourse = (e) => {
    e.preventDefault();

    if (
      localStorage.getItem('loggedIn') === null ||
      localStorage.getItem('loggedIn') === false
    ) {
      history.push('/mycourses');
    }

    const serialNo = localStorage.getItem('serialNo');

    axios({
      method: 'put',
      url: 'http://localhost:8080/api/clist/update',
      data: {
        student_id: serialNo,
        cname: props.title,
      },
    })
      .then(() => {
        console.log('Success');
        history.push('/mycourses');
      })
      .catch((e) => {
        console.log(e);
        alert('Error adding course');
        history.push('/');
      });
  };

  return (
    <>
      <div className='col-md-4 col-10 mx-auto'>
        <div className='card'>
          <img
            src={props.imgsrc}
            className='card-img-top'
            alt={props.imgsrc}
            style={{ height: '374px', width: '494px' }}
          />
          <div className='card-body'>
            <h5 className='card-title font-weight-bold'>{props.title}</h5>
            <p className='card-text'></p>
            <button onClick={addCourse} className='btn btn-primary'>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
