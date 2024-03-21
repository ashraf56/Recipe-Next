'use client'
import { AuthContext } from '@/app/context/ContextHome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const Deletebutton = ({ _id }) => {
  let { user } = useContext(AuthContext)
  const router = useRouter();
  let handleDElete = async () => {
    try {
      const res = await fetch(`/api/recipe?id=${_id}`, {
        method: "DELETE"
      })
      if (res.ok) {
        console.log('success');
        router.refresh()
      }

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex gap-3 '>
      {user && <> <Link href={`/updaterecipe/${_id}`}>
        <button className='btn btn-error btn-sm'>
          Update
        </button></Link>
        <button onClick={handleDElete} className='btn  btn-sm'>
          Delete
        </button></>}
    </div>
  );
};

export default Deletebutton;