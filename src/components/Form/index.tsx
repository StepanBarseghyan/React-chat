import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./styles.module.scss";
import { LoginFormValues, RegisterFormValues } from "./validationSchemas";
import { FormField, Schema } from "../../types/form";

interface FormProps {
  title: string;
  onSubmit: (data: any) => void;
  fields: FormField[];
  buttonLabel: string;
}

const Form = ({ title, onSubmit, fields, buttonLabel }: FormProps) => {
  const schema = yup.object().shape(
    fields.reduce<Record<string, yup.AnySchema>>((acc, field) => {
      acc[field.name as string] = field.validation;
      return acc;
    }, {})
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className={s.formWrapper}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div className={s.formField} key={field.name}>
            <input
              {...register(field.name)}
              type={field.type}
              placeholder={field.placeholder}
            />
            {errors[field.name] && <p>{errors[field.name]?.message}</p>}
          </div>
        ))}
        <button className={s.formBtn} type="submit">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

export default Form;
