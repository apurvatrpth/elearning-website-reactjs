import React from 'react';
import CourseCard from './CourseCard';
import UserList from './UserList';
import { CourseImage } from './CourseList';

export default function MyCourses() {
  if (!localStorage.getItem('loggedIn')) {
    return (
      <>
        <br />
        <br />
        <br />
        <h2 style={{ textAlign: 'center', color: '#3498db' }}>
          Login or SignUp to see your registered courses, or to buy new Courses.
        </h2>
      </>
    );
  }

  const id = localStorage.getItem('id');
  const pass = localStorage.getItem('password');

  return (
    <div>
      {UserList.map((item) => {
        if (item.id === id && item.password === pass) {
          return (
            <>
              <div className='my-5'>
                <h1 className='text-center' style={{ color: '#484848' }}>
                  My Courses
                </h1>
              </div>
              <div className='container-fluid mb-5'>
                <div className='row'>
                  <div className='col-10 mx-auto'>
                    <div className='row gy-4'>
                      <div>
                        {item.courses.map((i) => (
                          <CourseCard title={i} imgsrc={CourseImage[`${i}`]} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
