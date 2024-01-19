'use client'
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { options } from '../../../../ingredients';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useRouter } from 'next/navigation';

const animatedComponents = makeAnimated()

const RecipeForm = () => {
  let [selcetOption, setSelectOption] = useState([])
  const router = useRouter();

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
      let recipeInfo = { title: data.name, instruction: data.instruction, ingredients: data.select }
      const result = await fetch('/api/recipe',
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(recipeInfo)
        })
      const Allrecipe = await result.json()
      if (Allrecipe) {
        alert('data added')
      } else {
        throw new Error("Failed to add");
      }

    } catch (error) {
      console.log(error);
    }
    router.refresh()
    reset()
  };
  return (
    <div>
      <div className='card-body max-w-5xl'>
        <div>
        <h1 className="text-2xl font-bold">Add recipe</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">Name</label>
              <input
                type="text"
                placeholder="Type here"
                {...register("name", { required: "name is required" })}
                className="input input-bordered w-full max-w-full "
              />

            </div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">instruction</label>
              <textarea
                type="text"
                placeholder="Type here"
                {...register("instruction", { required: "instruction is required" })}
                className="textarea textarea-bordered w-full max-w-full "
              />

            </div>
            <div className="form-control">
              <label className="py-2 ps-2 text-xs md:text-sm">Ingredients</label>
              <Select
                defaultValue={selcetOption}
                components={animatedComponents}
                onChange={handleOnchange}
                isMulti={true}
                options={options}
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

export default RecipeForm;