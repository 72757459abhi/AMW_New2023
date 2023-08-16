import React from 'react'
import '../cssFile/Auth.css';
import { Link } from 'react-router-dom';

const Auth = (props) => {
  return (
    <main className={"auth"}>

    <main className={"auth1"}>
      <section>
        <form>
          <div className={"control"}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={"control"}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className={"btn"}>
            <Link to='/adminDashboard'><button onClick={ () => props.onLogIn()}> Login</button></Link>
          </div>
          
        </form>
      </section>
    </main>
    </main>
  );
};

export default Auth;
