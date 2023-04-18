import * as Yup from "yup";

export const SignUpValidation=Yup.object().shape({
    username: Yup.string()
      .required("username is required"),
      email: Yup.string()
      .required("email is required")
      .email("inter a valid email"), 
       password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?_&])[A-Za-z\d@$!_%*?&]{8,}$/g, "password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:(@$!_%*?&)"),
       city: Yup.string()
       .required("city is required"), 
      country: Yup.string()
      .required("country is required"), 
  });
  export const ExchangeValidation=Yup.object().shape({
    from: Yup.string()
      .required("from is required"),
      to: Yup.string()
      .required("from is required"), 
      amount: Yup.number()
      .required("amount is required").typeError("amount must be a number "), 
  });