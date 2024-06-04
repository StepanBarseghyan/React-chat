import {
  LoginFormValues,
  RegisterFormValues,
} from "../components/Form/validationSchemas";
import * as yup from "yup";

export type Schema = LoginFormValues | RegisterFormValues;

export interface FormField {
  name: keyof Schema;
  placeholder: string;
  type: string;
  validation: yup.AnySchema;
}

export interface Message {
  id: number;
  text?: string;
  audio?: string;
  fromMe: boolean;
  date: Date;
}
