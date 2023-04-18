import FormikReactSelect from "@/components/common/form/formikReactSelect";
import Input from "@/components/common/form/input";
import SubmitBtn from "@/components/common/form/submitBtn";
import countries from "@/constants/countries";
import { SignUpValidation } from "@/utils/validations";
import axios from "axios";
import { Formik, Form, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
interface ISignUpFormValues {
  username: string;
  email: string;
  password: string;
  city: string;
  country: string;
}
import {useContext} from 'react'
import AuthContext from "@/context/authContext";
export default function SignUp() {
  const { push } = useRouter();
  const {loginHandler}=useContext(AuthContext)
  const submitHandler = async (
    values: ISignUpFormValues,
    { setSubmitting }: FormikHelpers<ISignUpFormValues>
  ) => {
    try {
      const { data, status } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signUp`,
        values
      );
      if (status === 201) {
      loginHandler(data.data.token)
        toast.success("sign up is success !", {
          position: toast.POSITION.TOP_LEFT
        });
        push("/user/dashboard");
      }
    } catch (error) {
      toast.error("sign up field !", {
        position: toast.POSITION.TOP_LEFT
      });
      console.log(error);
    }
    setSubmitting(false);
  };
  const initialValues: ISignUpFormValues = {
    city: "",
    email: "",
    password: "",
    username: "",
    country: "",
  };
  return (
    <section className="h-screen flex justify-center items-center bg-gray-300 p-6 ">
      <div className=" bg-white rounded-lg  p-6   w-[500px]">
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpValidation}
          onSubmit={submitHandler}
        >
          <Form>
            <Input label="email" name="email" type="email" />
            <Input label="username" name="username" />
            <FormikReactSelect
              name="country"
              options={countries.map((c) => ({ value: c, label: c }))}
              placeholder="select your country"
              label="your country"
            />
            <Input label="city" name="city" />
            <Input label="password" name="password" type="password" />
            <SubmitBtn />
          </Form>
        </Formik>
      </div>
    </section>
  );
}
