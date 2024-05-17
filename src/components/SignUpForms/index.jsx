import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForms = () =>{

    const {register,handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const handleClear = () =>{
        reset();
    }; 

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nombre
                <input {...register('name',{ required: true })}/>
                {errors.exampleRequired && <span>This field is required</span>}
            </label>            
            <label>
                Edad
                <input {...register('age')}/>
            </label>
            
            <div>
                <button type="button" onClick={handleClear}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default SignUpForms;