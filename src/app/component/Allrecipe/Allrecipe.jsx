

import getAllRecipe from '@/util/getAllRecipe';
import Link from 'next/link';
import React, { useContext } from 'react';
import Deletebutton from './Deletebutton';

const Allrecipe = async () => {
    const allRecipe = await getAllRecipe()
    

    return (
        <div className='mx-auto items-center justify-center p-24'>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-2 mx-auto '>
                {allRecipe?.length === 0 ? <span className="loading loading-ring loading-lg"></span> :
                    allRecipe?.map(all => (
                        <div key={all._id}>

                            <div className="card w-96 bg-base-100 h-full shadow-xl">
                                <div className="card-body h-full">
                                    <h2 className="card-title">
                                        {all?.title}   </h2>

                                    <div className=" card-actions flex gap-3  mt-10">
                                        
                                            
                                            <Deletebutton _id={all._id} /> 
                                        <Link href={`/recipedetail/${all._id}`}>  <button className="btn btn-sm btn-primary">
                                            Details
                                        </button></Link>

                                    </div>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>

                    ))}
            </div>

        </div>
    );
};

export default Allrecipe;