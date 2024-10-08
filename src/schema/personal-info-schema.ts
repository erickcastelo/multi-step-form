import * as yup from "yup";

export const personalInfoSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    email: yup
      .string()
      .required("Email is a required field")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please enter a valid email address"
      ),
    phone: yup.string().required("Phone is a required field"),
  })
  .required();

// export const personalInfoSchema = yup
//   .object()
//   .shape({
//     name: yup.string(),
//     email: yup.string(),
//     phone: yup.string(),
//   })
//   .required();
