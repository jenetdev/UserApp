"use client";
import { Button } from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { Form } from "informed";
import TextInput from "../../TextInput";
import useCreateUser from "./useCreateUser";

const CreateUser = ({ fetchData, currentPage }) => {
  const { isOpen, validateRequired, toggle, handleSubmit } = useCreateUser({
    fetchData,
    currentPage,
  });
  return (
    <div>
      <button onClick={toggle} className="btn btn-primary" role="button">
        Add a User
      </button>
      <Modal centered show={isOpen} onHide={toggle}>
        <Modal.Header closeButton>Create a User</Modal.Header>
        <Form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px" }}>
            <TextInput
              field="username"
              autoComplete="firstname"
              label="UserName"
              validate={validateRequired}
              validateOn="change"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <TextInput
              field="email"
              label="Email"
              validateOn="change"
              validate={validateRequired}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <TextInput
              field="password"
              type="password"
              label="Password"
              validate={validateRequired}
              validateOn="change"
            />
          </div>

          <Button color="success" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateUser;
