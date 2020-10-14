import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();

  const [state, setstate] = useState({
    id: '',
    password: '',
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setstate((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const SubmitAction = (e) => {
    e.preventDefault();

    var promise = new Promise((res, rej) => {
      axios({
        method: 'put',
        url: 'http://localhost:8080/api/clist/signup',
        data: {
          student_name: state.id,
          student_password: state.password,
        },
      })
        .then((ress) => {
          const { id } = ress.data;
          localStorage.setItem('serialNo', id);
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('id', state.id);
          localStorage.setItem('password', state.password);
          res();
        })
        .catch((e) => {
          localStorage.setItem('loggedIn', false);
          console.log('error ' + e);
          rej();
        });
    });

    promise
      .then(() => {
        alert('Successfully signed up');
        history.push('/');
      })
      .catch((e) => {
        alert('Error During SignUp process');
      });
  };

  return (
    <>
      <br />
      <br />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'></div>
            <h1 style={{ color: '#3498db', textAlign: 'center' }}>SignUp</h1>
            <form>
              <div class='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  class='form-control'
                  name='id'
                  value={state.id}
                  aria-describedby='emailHelp'
                  onChange={InputEvent}
                />
                <small id='emailHelp' class='form-text text-muted'>
                  Enter your email address
                </small>
              </div>
              <br />
              <div class='form-group'>
                <label for='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  class='form-control'
                  name='password'
                  value={state.password}
                  onChange={InputEvent}
                />
                <small id='passHelp' class='form-text text-muted'>
                  Enter a strong password
                </small>
              </div>
              <br />
              <button
                type='submit'
                class='btn btn-primary'
                onClick={SubmitAction}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
