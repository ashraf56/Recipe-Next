"use client"
import React, { useEffect, useState } from 'react';
import RecipeForm from '../component/RecipeForm/RecipeForm';

const RHome = () => {

 
    return (
        <div>
         <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <RecipeForm></RecipeForm>
    </div>
  </div>
</div>
        </div>
    );
};

export default RHome;