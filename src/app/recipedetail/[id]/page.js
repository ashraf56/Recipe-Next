
import getSingleRecipe from '@/util/getSingleRecipe';
import React from 'react';

const Details = async ({ params }) => {
    let { id } = params
    const recipeDetail = await getSingleRecipe(id)

    return (
        <div className='p-10'>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='font-extrabold text-6xl'>{recipeDetail.title}</h1>
                    <p><span className=' font-bold'>Instruction</span>: {recipeDetail?.instruction}</p>
                    <div>
                        <p className=" text-white text-center font-semibold py-6">Ingredients</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4  ">

                            {recipeDetail?.ingredients?.map((ing, index) => (
                                <button key={ing} className='btn'>{ing}</button>
                            ))}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;