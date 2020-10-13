import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Common(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-10 mx-auto'>
                <div className='row'>
                  {/* <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'> */}
                  {/* <div style={{ backgroundImage: `${props.imgsrc}` }}/> */}
                  <div className='header-img'>
                    <img
                      src={props.imgsrc}
                      alt='Common pic'
                      style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}
                    />
                  </div>

                  {/* <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img
                      src={web}
                      className='img-fluid-animated'
                      alt='Common image'
                    />
                  </div> */}
                  <br />
                  <h1>
                    {props.name}
                    <strong className='brand-name'> Learners' Hub</strong>
                  </h1>
                  <h2 className='my-3'>
                    Build skills with courses, certificates, and degrees online
                    from world-class universities and companies
                  </h2>
                  <br />
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>
                      {props.btname}
                    </NavLink>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
