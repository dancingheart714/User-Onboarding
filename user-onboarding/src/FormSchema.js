import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  first_name: Yup
    .string()
    .required("Name is required"),

  last_name: Yup
    .string()
    .required("Name is required"),

  email: Yup
    .string()
    .email("Must be a valid email")
    .required("An Email is required"),

  password: Yup
    .string()
    .required(5, "Must be a valid password containing at least 5 characters"),
  

});

export default FormSchema;
