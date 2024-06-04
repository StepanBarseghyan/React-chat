import React from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import Form from "../../components/Form";
import { SubmitHandler } from "react-hook-form";
import {
  LoginFormValues,
  loginSchema,
} from "../../components/Form/validationSchemas";
import { FormField } from "../../types/form";
import * as yup from "yup";

const SignIn = () => {
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log("Signin data:", data);
  };

  const formFields: FormField[] = [
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      validation: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      validation: yup.string().required("Password is required"),
    },
  ];

  return (
    <section className={classNames(s.signin)}>
      <Form
        title={"Sign in"}
        onSubmit={onSubmit}
        fields={formFields}
        buttonLabel="Войти"
      />
    </section>
  );
};

export default SignIn;
