import { useFormikContext } from "formik";
import Button from "../Button";
import Spinner from "../spinner";

function SubmitBtn() {
  const { isSubmitting } = useFormikContext();
  return <Button disabled={isSubmitting}  type="submit" >
    {isSubmitting?<Spinner/>:"confirm"}
  </Button>;
}
export default SubmitBtn;
