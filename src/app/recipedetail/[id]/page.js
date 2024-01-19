
import getSingleRecipe from '@/util/getSingleRecipe';
import React from 'react';

const Details = async ({ params }) => {
    let { id } = params
    const recipeDetail = await getSingleRecipe(id)
    return (
        <div>
            <div className='card'>
                <div className='card-body'>
                    <h1>{recipeDetail.title}</h1>
                    <div>
                        {recipeDetail?.ingredients?.map(ing => (

                            <div>
                                {ing}
                            </div>
                        ))}
                    </div>
                    <p>{recipeDetail?.instruction}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;