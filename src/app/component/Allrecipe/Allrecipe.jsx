

import getAllRecipe from '@/util/getAllRecipe';
import Link from 'next/link';
import React, { useContext } from 'react';
import Deletebutton from './Deletebutton';
import { SlArrowRight } from "react-icons/sl";
const Allrecipe = async () => {
    const allRecipe = await getAllRecipe()


    return (
        <div className='mx-auto items-center justify-center p-24'>
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-2 mx-auto '>
                {allRecipe?.length === 0 ? <span className="loading loading-ring loading-lg"></span> :
                    allRecipe?.map(all => (
                        <div key={all._id}>

                            <div className="card w-96 h-72 shadow-2xl border-2 border-white hover:border-blue-600 p-2 bg-black transition duration-300 ease-linear transform text-white hover:transition-3s hover:bg-white hover:text-black hover:bg-gradient-to-tl">
                                <div className="card-body h-full">
                                    <h2 className="card-title">
                                        {all?.title}   </h2>
                                    <p>{all?.instruction.slice(0, 40)}.. <br />

                                    </p><Link href={`/recipedetail/${all._id}`}>
                                        <span className=' font-bold  hover:text-blue-400 pt-5 flex gap-3 items-center '>Read More <SlArrowRight />  </span>
                                    </Link>
                                    <div className=" card-actions flex gap-3  mt-10">


                                        <Deletebutton _id={all._id} />


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