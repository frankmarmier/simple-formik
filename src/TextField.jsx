import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

const TextField = (props) => {
  const { label, name, type } = props;

  const [field, meta] = useField({ name });

  //   console.log(field);

  const errorText = (meta.touched && meta.error) || "";

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type || "text"} {...field} />
      {errorText && <FormHelperText>{errorText}</FormHelperText>}
    </FormControl>
  );
};

export default TextField;
