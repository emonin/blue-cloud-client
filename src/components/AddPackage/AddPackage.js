import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://bluecloud-server.herokuapp.com/addpackage",
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    };
    return (
        <section className="container">
            <h1 className="text-primary fw-bold my-5">Add New Package</h1>
            <div className="bg-white shadow rounded p-4">
                <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true })}
                            placeholder="Package Name*"
                            className="p-3 m-3 w-100 shadow-sm border rounded"
                        />
                        <input {...register("desc", { required: true })}
                            placeholder="Description*"
                            className="p-3 m-3 w-100 shadow-sm border rounded"
                        />
                        <input {...register("price", { required: true })}
                            type="number"
                            placeholder="Package Price*"
                            className="p-3 m-3 w-100 shadow-sm border rounded"
                        />
                        <input {...register("img", { required: true })}
                            type="url"
                            placeholder="Image URL*"
                            className="p-3 m-3 w-100 shadow-sm border rounded"
                        />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="p-3 m-3 fw-bold text-white bg-primary border rounded" type="submit" />
                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddPackage;