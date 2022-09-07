import { Field, Formik, Form } from 'formik';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import CustomError from './valid/CustomError';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [form, setForm] = useState([]);
  const { id } = useParams();
  const validation = yup.object({
    firstName: yup.string().required('first Name is Require!'),
    lastName: yup.string().required('Last Name is Require!'),
    number: yup
      .number()
      .min(10000, 'Number is too short')
      .max(9999999999, 'Number is too long')
      .required('Number is Require!'),
    date: yup.date().required('Date is Required!'),
  });
  useEffect(() => {
    axios
      .get(`https://63052075697408f7edc2438e.mockapi.io/todo1/${id}`)
      .then((res) => {
        console.log('getting data from server in update ', res.data);
        setForm(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleOnSubmit = (values) => {
    axios
      .put(`https://63052075697408f7edc2438e.mockapi.io/todo1/${id}`, values)
      .then((res) => {
        console.log('updating data in server ', res.data);
      })
      .catch((error) => console.log(error));
    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
      navigate('/');
    }, 2000);
    console.log('values set', values);
  };
  return (
    <>
      {update && (
        <Container className="bg-dark mt-2 rounded">
          <Card className="p-2 text-center text-white bg-success mt-2 rounded">
            <Row className="bg-info m-auto rounded">
              <h2> Updating...</h2>
            </Row>
          </Card>
        </Container>
      )}
      <Formik
        validationSchema={validation}
        initialValues={{
          firstName: form.firstName,
          lastName: form.lastName,
          number: form.number,
          // file: '',
          date: form.date,
        }}
        onSubmit={handleOnSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Container className="mt-3 m-auto text-white text-center bg-success rounded">
            <Form>
              <Row className="text-center">
                <label className="m-2">
                  Enter First Name
                  <div>
                    <Field
                      className="p-2 w-50 rounded"
                      name="firstName"
                      type="text"
                    />
                    <CustomError name="firstName" />
                  </div>
                </label>

                <label className="m-2">
                  Enter Last Name
                  <div>
                    <Field
                      className="p-2 w-50 rounded"
                      name="lastName"
                      type="text"
                    />
                    <CustomError name="lastName" />
                  </div>
                </label>

                <label className="m-2">
                  Enter your Number
                  <div>
                    <Field
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
                      className="p-2 w-50 rounded "
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
                    Update Form
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Update;
