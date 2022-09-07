import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Create from './Create';
const CompAdder = () => {
  const [show, setShow] = useState(false);
  const display = () => {
    setShow(true);
  };
  const hideForm = () => {
    setShow(false);
  };
  return (
    <>
      <div className="text-center mt-2 justify-content-center align-content-center">
        {show && <Create onCancel={hideForm} />}
        <Button type="submit" onClick={display}>
          Add New Record
        </Button>
      </div>
    </>
  );
};

export default CompAdder;
