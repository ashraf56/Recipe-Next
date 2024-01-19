'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { options } from '../../../../ingredients';

const UpdateRecipe = ({ updateRecipes }) => {
    const router = useRouter();
    let [selcetOption, setSelectOption] = useState([])
    const handleOnchange = sOption => {
        setSelectOption(sOption)

    }

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {


              const selectedOptions = selcetOption.map((option) => option.value);
              data.select = selectedOptions
            let updaterecipeInfo = { Newtitle: data.Newtitle, Newinstruction: data.Newinstruction, Newingredients: data.select }
            const result = await fetch(`/api/recipe/${updateRecipes._id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updaterecipeInfo)
                })
            const Allrecipe = await result.json()
            if (Allrecipe) {
                alert('data updated')
            } else {
                throw new Error("Failed to update");
            }

        } catch (error) {
            console.log(error);
        }
        router.refresh()
        reset()
    };
    return (
        <div className='card max-w-3xl mx-auto'>
 <div className='card-body max-w-5xl'>
        <div>
        <h1 className="text-2xl font-bold">Update a recipe</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">Name</label>
              <input
                type="text"
                placeholder="Type here"
                defaultValue={updateRecipes.title}
                {...register("Newtitle", { required: "name is required" })}
                className="input input-bordered w-full max-w-full "
              />

            </div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">instruction</label>
              <textarea
              defaultValue={updateRecipes.instruction}
                type="text"
                placeholder="Type here"
                {...register("Newinstruction", { required: "instruction is required" })}
                className="textarea textarea-bordered w-full max-w-full "
              />

            </div>
            <div className="form-control">
              <label className="py-2 ps-2 text-xs md:text-sm">Ingredients</label>
              <Select
                defaultValue={updateRecipes?.ingredients?.map(i=> ({ label: i, value: i  }))}
                
                onChange={handleOnchange}
                isMulti={true}
                options={options.filter((option) => {
                    const selectedIngredients = updateRecipes?.ingredients?.map((i) => i) || [];
                    return !selectedIngredients.includes(option.value);
                  })}
                className="basic-multi-select  dark:text-black"

              />
            </div>
          </div>
          {errors.name && (
            <p className="text-sm pt-1">{errors.name.message}</p>
          )}
          {errors.instruction && (
            <p className="text-sm pt-1">{errors.instruction.message}</p>
          )}

          <div className='text-center my-5'>
            <button type='submit' className='btn btn-wide uppercase'>Submit</button>
          </div>
        </form>



      </div>
        </div>
    );
};

export default UpdateRecipe;