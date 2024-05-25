import * as yup from "yup";

const validationScheme = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
});

export default validationScheme;
