import UpdateRecipe from '@/app/component/UpdateRecipe/UpdateRecipe';
import getSingleRecipe from '@/util/getSingleRecipe';
import React from 'react';

const updateRecipe = async({params}) => {
let {id}=params
let updateRecipes= await getSingleRecipe(id)
    return (
        <div>
            <UpdateRecipe updateRecipes={updateRecipes} ></UpdateRecipe>
        </div>
    );
};

export default updateRecipe;