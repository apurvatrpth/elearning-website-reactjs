import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
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
        method: 'get',
        url: `http://localhost:8080/api/clist/login/${state.id}/${state.password}`,
      })
        .then((ress) => {
          console.log(ress);
          const { id } = ress.data;
          localStorage.setItem('serialNo', id);
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('id', state.id);
          localStorage.setItem('password', state.password);
          res();
        })
        .catch((e) => {
          console.log(e);
          localStorage.setItem('loggedIn', false);
          rej();
        });
    });

    promise
      .then(() => {
        history.push('/');
      })
      .catch((e) => {
        alert('User Not Found, Redirecting you to SignUp page');
        history.push('/signup');
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
            <h1 style={{ color: '#3498db', textAlign: 'center' }}>Login</h1>
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
                  We'll never share your email with anyone else.
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

export default Login;
