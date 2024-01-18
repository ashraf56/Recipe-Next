
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const RecipeForm = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) => {
       console.log(data);
    
      };
    return (
        <div>
             <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">Name</label>
              <input
                type="text"
                placeholder="Type here"
                {...register("name", { required: "name is required" })}
                className="input input-bordered w-full max-w-full lg:max-w-xl"
              />
              {errors.name && (
                <p className="text-sm pt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="py-2 text-xs md:text-sm">instruction</label>
              <input
                type="text"
                placeholder="Type here"
                {...register("instruction", { required: "instruction is required" })}
                className="input input-bordered w-full max-w-full lg:max-w-xl"
              />
              {errors.instruction && (
                <p className="text-sm pt-1">{errors.instruction.message}</p>
              )}
            </div>
          </div>
<div>
    <button type='submit'>Submit</button>
</div>
        </form>
       
         
       
      </div>
        </div>
    );
};

export default RecipeForm;