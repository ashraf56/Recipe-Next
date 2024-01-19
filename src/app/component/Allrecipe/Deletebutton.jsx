'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Deletebutton = ({_id}) => {
    const router = useRouter();
    let handleDElete= async ()=>{
        try {
         const res= await fetch(`/api/recipe?id=${_id}`,{
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
        <div>
           <button onClick={handleDElete} className='btn  btn-sm'>
                Delete
            </button>  
        </div>
    );
};

export default Deletebutton;