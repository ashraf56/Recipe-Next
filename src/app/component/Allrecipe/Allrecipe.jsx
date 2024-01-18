

import getAllRecipe from '@/util/getAllRecipe';
import React from 'react';

const Allrecipe = async() => {
    const allRecipe = await  getAllRecipe()
    console.log(allRecipe);
    return (
        <div>
            {allRecipe.map(all => (
                <div>{all.name}</div>
            ))}
        </div>
    );
};

export default Allrecipe;