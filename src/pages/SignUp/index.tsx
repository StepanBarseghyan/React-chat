import React from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import Form from "../../components/Form";
// import {
//   RegisterFormValues,
//   registerSchema,
// } from "../../components/Form/validationSchemas";
import { SubmitHandler } from "react-hook-form";
import { FormField, Schema } from "../../types/form";
import * as yup from "yup";

const SignUp = () => {
  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log("Signup data:", data);
  };

  const formFields: FormField[] = [
    {
      name: "username",
      placeholder: "Имя пользователя",
      type: "text",
      validation: yup.string().required("Имя пользователя обязательно"),
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      validation: yup
        .string()
        .email("Неверный email")
        .required("Email обязателен"),
    },
    {
      name: "password",
      placeholder: "Пароль",
      type: "password",
      validation: yup.string().required("Пароль обязателен"),
    },
  ];

  return (
    <section className={classNames(s.signup)}>
      <Form
        title={"Sign in"}
        onSubmit={onSubmit}
        fields={formFields}
        buttonLabel="Войти"
      />
    </section>
  );
};

export default SignUp;
