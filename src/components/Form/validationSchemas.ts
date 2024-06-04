import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Обязательно для заполнения"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Обязательно для заполнения"),
});

export type LoginFormValues = yup.InferType<typeof loginSchema>;

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Минимум 3 символа")
    .required("Обязательно для заполнения"),
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Обязательно для заполнения"),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Обязательно для заполнения"),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;

// export const signInFields = [
//   { name: "email", label: "Email", type: "email" },
//   { name: "password", label: "Пароль", type: "password" },
// ];

// export const signUpFields = [
//   { name: "username", label: "Имя пользователя", type: "text" },
//   { name: "email", label: "Email", type: "email" },
//   { name: "password", label: "Пароль", type: "password" },
// ];
