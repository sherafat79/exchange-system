import FormikReactSelect from "@/components/common/form/formikReactSelect";
import Input from "@/components/common/form/input";
import SubmitBtn from "@/components/common/form/submitBtn";
import { ConvertToOptions } from "@/constants/symbols";
import { ExchangeValidation } from "@/utils/validations";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface IExchangeInitialValues {
  from: string;
  to: string;
  amount: string;
}
interface IDashboardProps {
  symbols: [];
}
export default function Dashboard({ symbols }: IDashboardProps) {
  const [result, setResult] = useState<string>("");
  const initialValues: IExchangeInitialValues = {
    amount: "",
    from: "",
    to: "",
  };
  const submitHandler = async (
    values: IExchangeInitialValues,
    { setSubmitting }: FormikHelpers<IExchangeInitialValues>
  ) => {
    try {
      const { to, amount, from } = values;
      const { data } = await axios.get(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
        {
          headers: {
            apikey: process.env.NEXT_PUBLIC_APILAYER_API_KEY,
          },
        }
      );
      const convertResult = `Every ${amount} ${from} equals ${data.result} ${to}`;
      setResult(convertResult);
      toast.success("convert is success  !", {
        position: toast.POSITION.TOP_LEFT,
      });
    } catch (error) {
      toast.error("convert field !", {
        position: toast.POSITION.TOP_LEFT,
      });
      console.log(error);
    }
    setSubmitting(false);
  };
  return (
    <section className="h-screen flex justify-center items-center bg-gray-300 p-6 ">
      <div className=" bg-white rounded-lg  p-6   w-[500px]">
        <Formik
          initialValues={initialValues}
          validationSchema={ExchangeValidation}
          onSubmit={submitHandler}
        >
          <Form>
            <FormikReactSelect
              name="from"
              options={symbols}
              placeholder="currency you would like to convert from"
              label="from"
            />
            <FormikReactSelect
              name="to"
              options={symbols}
              placeholder="currency you would like to convert to."
              label="to"
            />
            <Input
              label="amount"
              name="amount"
              description="The amount to be converted."
            />
            {result && <p>{result}</p>}
            <SubmitBtn />
          </Form>
        </Formik>
      </div>
    </section>
  );
}
export async function getStaticProps() {
  const symbols = ConvertToOptions();
  return {
    props: {
      symbols,
    },
  };
}
