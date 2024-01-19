

import getAllRecipe from '@/util/getAllRecipe';
import Link from 'next/link';
import React from 'react';
import Deletebutton from './Deletebutton';

const Allrecipe = async () => {
    const allRecipe = await getAllRecipe()

    return (
        <div>
            <div className='grid grid-cols-1 gap-4 mx-auto '>
                {allRecipe.length === 0 ? <span className="loading loading-ring loading-lg"></span> :
                    allRecipe?.map(all => (
                        <div >
                            <div role="alert" key={all._id} className="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                                <div>
                                    <h3 className="font-bold">{all?.title}</h3>
                                    <button>
                                        <Link href={`/updaterecipe/${all?._id}`}>Update</Link>
                                    </button>
                                </div>
                                <div className='flex'>
                                    <Deletebutton _id={all._id} />
                                    <button className="btn btn-sm btn-primary">
                                        <Link href={`/recipedetail/${all._id}`}>Details</Link>
                                    </button>
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