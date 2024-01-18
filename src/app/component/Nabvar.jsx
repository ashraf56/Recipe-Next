'use client'

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext, UserAuth } from '../context/ContextHome';

const Nabvar = () => {
  let { user, googleLogin } = useContext(AuthContext)

  const googleSignin = async () => {
    try {
      await googleLogin();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">

          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            {user && <li>
              <Link href={'/addrecipe'}>Add a recipe</Link>
            </li>}
            <li>
              <button onClick={googleSignin}>google</button>
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
};

export default Nabvar;