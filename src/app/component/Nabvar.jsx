'use client'

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../context/ContextHome';

const Nabvar = () => {
  let { user, googleLogin, logout } = useContext(AuthContext)

  //Google sign IN 
  const googleSignin = async () => {
    try {
      await googleLogin();

    } catch (error) {
      console.log(error);
    }
  }
  // User Logout
  const Signout = async () => {
    try {
      await logout();

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">

          <a className="btn btn-ghost text-xl">Next Recipe</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            {/* If user is not available Add recipe will be invisible */}
            {user && <li>
              <Link href={'/addrecipe'}>Add a recipe</Link>
            </li>}

            {/* user auth */}
            <li>
              {user ? <button className='uppercase' onClick={Signout}>logout</button> : <button className='uppercase' onClick={googleSignin}>Sign In</button>}
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Nabvar;