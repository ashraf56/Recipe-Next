
import getSingleRecipe from '@/util/getSingleRecipe';
import React from 'react';

const Details = async ({ params }) => {
    let { id } = params
    const recipeDetail = await getSingleRecipe(id)
    
    return (
        <div className='p-10'>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='font-extrabold text-3xl'>{recipeDetail.title}</h1>
                    <p><span className='uppercase font-bold'>instruction</span>:{recipeDetail?.instruction}</p>
                    <div>
                        <ul className="menu bg-base-200 w-56 ">
                            <li className="menu-title">Ingredients</li>
                            {recipeDetail?.ingredients?.map((ing, index) => (
                                <li key={ing}><a><span>{index + 1}</span>{ing}</a></li>
                            ))}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;