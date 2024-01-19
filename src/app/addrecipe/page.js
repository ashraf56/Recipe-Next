"use client"
import React, { useEffect, useState } from 'react';
import RecipeForm from '../component/RecipeForm/RecipeForm';

const RHome = () => {

 
    return (
        <div>
         <div className=" bg-base-100 mx-auto ">
  <div className="hero-content mx-auto">
    
    <div className="card  w-full max-w-4xl shadow-2xl bg-base-300">
      <RecipeForm></RecipeForm>
    </div>
  </div>
</div>
        </div>
    );
};

export default RHome;