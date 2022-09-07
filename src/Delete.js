import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const [del, setDel] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .delete(`https://63052075697408f7edc2438e.mockapi.io/todo1/${id}`)
      .then((res) => {
        console.log('Deleting data from server ', res);
      })
      .catch((error) => console.log(error));
    setDel(true);
    setTimeout(() => {
      setDel(false);
      navigate('/');
    }, 2000);
  }, [del]);

  return (
    <>
      {del && (
        <Container>
          <Card className="p-2 text-center text-white bg-success mt-2 rounded">
            <Row className="bg-danger m-auto rounded">
              <h2> Deleting...</h2>
            </Row>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Delete;
