// import React, { useRef } from 'react';
import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import CustomError from './valid/CustomError';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';

const Create = ({ onCancel }) => {
  // const navigate = useNavigate();
  // const element = useRef();
  const validation = yup.object({
    firstName: yup.string().required('first Name is Require!'),
    lastName: yup.string().required('Last Name is Require!'),
    number: yup
      .number()
      .min(10000, 'Number is too short')
      .max(9999999999, 'Number is too long')
      .required('Number is Require!'),
    date: yup.date().required('Date is Required!'),
    // file: yup
    //   .mixed()
    //   .nullable('Image is Required')
    //   .required('File is not Uploaded'),
  });
  const handleOnSubmit = (values) => {
    axios.post(`https://63052075697408f7edc2438e.mockapi.io/todo1`, values);
    console.log('values uploaded', values);
    onCancel();
  };
  // const formik = useFormik({
  //   initialValues: { firstName: '', lastName: '', number: '' },
  //   // onSubmit:(values) => {
  //   //   console.log(values);
  //   // }
  // });
  // console.log(formik.values);
  return (
    <Formik
      validationSchema={validation}
      initialValues={{
        firstName: '',
        lastName: '',
        number: '',
        // file: '',
        date: '',
      }}
      onSubmit={handleOnSubmit}
    >
      {({ values, setFieldValue }) => (
        <Container className="mt-3 m-auto p-3 text-center rounded">
          <Form>
            <Row className="justify-content-evenly">
              {/* <Col className="p-2"> */}
              <label className="m-2">
                Enter First Name
                <div>
                  <Field
                    placeHolder="Enter First Name"
                    className="p-2 w-50 rounded"
                    name="firstName"
                    type="text"
                  />
                  <CustomError name="firstName" />
                </div>
              </label>
              {/* </Col> */}

              {/* <Col className="p-2"> */}
              <label className="m-2">
                Enter Last Name
                <div>
                  <Field
                    placeHolder="Enter Last Name"
                    className="p-2 w-50 rounded"
                    name="lastName"
                    type="text"
                  />
                  <CustomError name="lastName" />
                </div>
              </label>
              {/* </Col> */}
              {/* <Col className="p-2"> */}

              <label className="m-2">
                Enter your Number
                <div>
                  <Field
                    placeHolder="Enter Number"
                    className="p-2 w-50 rounded"
                    name="number"
                    type="text"
                  />
                  <CustomError name="number" />
                </div>
              </label>
              <label className="m-2">
                Enter DOB
                <div>
                  <Field
                    placeHolder="Enter DOB"
                    className="p-2 w-50 text-center rounded"
                    name="date"
                    type="date"
                  />
                  <CustomError name="date" />
                </div>
              </label>
            </Row>
            <Row>
              <Col className="m-2">
                <Button className="btn-lg p-2" type="submit">
                  Submit Form
                </Button>
                <Button
                  className="btn-lg bg-danger ms-2 p-2"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default Create;
