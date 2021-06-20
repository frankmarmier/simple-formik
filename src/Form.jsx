import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextField from "./TextField";

const playerSchema = yup.object().shape({
  name: yup.string().min(2).required("Yo polo mets une string"),
  age: yup.number().min(2).required(),
  lastName: yup.string().min(2).required(),
});

const MyForm = (props) => {
  const formValues = {
    name: "",
    age: 0,
    lastName: "",
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={formValues}
      validationSchema={playerSchema}
    >
      <Form>
        <TextField name="name" label="Name" />
        <TextField name="lastName" label="LastName" />
        <TextField name="age" label="Age" type="number" />
        <Button type="submit">I am button</Button>
      </Form>
    </Formik>
  );
};

export default MyForm;
