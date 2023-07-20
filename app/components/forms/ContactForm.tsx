"use client";
import React from "react";
import Input from "./Input";
import { FieldValues, useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    if (!data) return;

    reset();
  };

  return (
    <div className="mx-auto mt-8 max-w-lg">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" 
          rounded-md 
          border 
          border-black
          p-6
        "
      >
        <Input
          id="name"
          label="Name"
          type="text"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="Email"
          type="email"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="telephone"
          label="Phone"
          type="tel"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="message"
          label="Message"
          type="text"
          register={register}
          errors={errors}
          required
        />

        <button
          className=" 
            w-30
            ml-auto 
            mt-4
            block
            rounded-md
            bg-slate-500
            px-6
            py-2
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
