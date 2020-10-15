import React from 'react';
import CourseCard from './CourseCard';
import { CourseImage } from './CourseList';
import axios from 'axios';

export default class MyCourses extends React.Component {
  constructor() {
    super();

    this.state = {
      serialNo: localStorage.getItem('serialNo'),
      courses: [],
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('loggedIn')) {
      return (
        <>
          <br />
          <br />
          <br />
          <h2 style={{ textAlign: 'center', color: '#3498db' }}>
            Login or SignUp to see your registered courses, or to buy new
            Courses.
          </h2>
        </>
      );
    }

    axios({
      method: 'get',
      url: `http://localhost:8080/api/clist/${this.state.serialNo}`,
    })
      .then((r) => {
        this.setState({
          serialNo: localStorage.getItem('serialNo'),
          courses: r.data,
        });
        console.log('success');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return this.state.courses.length ? (
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
                  {this.state.courses.map((i) => (
                    <CourseCard
                      key={i['cname']}
                      title={i['cname']}
                      imgsrc={CourseImage[`${i['cname']}`]}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : null;
  }
}
