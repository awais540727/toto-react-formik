import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CompAdder from './CompAdder';
const Home = () => {
  const [serverData, setServerData] = useState([]);
  const navigate = useNavigate();
  const deleteTodo = (id, e) => {
    navigate(`/delete/${id}`);
    // axios
    //   .delete(`https://63052075697408f7edc2438e.mockapi.io/todo1/${id}`)
    //   .then((res) => {
    //     console.log('Deleting data from server ', res);
    //   })
    //   .catch((error) => console.log(error));
    // setDel(true);
    // setTimeout(() => {
    //   setDel(false);
    // }, 3000);
  };
  const updateTodo = (id) => {
    navigate(`/update/${id}`);
    // setDel(true);
    // setTimeout(() => {
    //   setDel(false);
    // }, 3000);
  };
  useEffect(() => {
    axios
      .get(`https://63052075697408f7edc2438e.mockapi.io/todo1`)
      .then((res) => {
        // console.log('getting data from server', res.data);
        setServerData(res.data);
      })

      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log('store data ', serverData);
  return (
    <>
      <Row className="p-4">
        <CompAdder />
      </Row>
      <Container className="mt-2 bg-info rounded">
        {serverData.map((value) => (
          <Card className="p-3 text-center mt-2" key={value.id}>
            <Row className="text-center mt-2">
              <Col>{value.firstName}</Col>
              <Col>{value.lastName}</Col>
              <Col>{value.number}</Col>
              <Col>{value.date}</Col>
              <Col>
                <Button
                  className="bg-success"
                  type="submit"
                  onClick={() => updateTodo(value.id)}
                >
                  Update
                </Button>
              </Col>
              <Col>
                <Button
                  className="bg-danger"
                  type="submit"
                  onClick={(e) => deleteTodo(value.id, e)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Home;
