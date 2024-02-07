import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Please enter a valid name")
    .max(64)
    .required("Required"),
  email: Yup.string().email().required("Required"),
  note: Yup.string().min(3).max(1400).required("Required"),
});
