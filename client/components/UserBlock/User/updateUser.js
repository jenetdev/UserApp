import { Form } from "informed";
import { Modal } from "react-bootstrap";
import { Button } from "reactstrap";
import TextInput from "../../TextInput";
import useUpdateUser from "./useUpdateUser";

const UpdateUser = ({ id, item, fetchData, currentPage }) => {
  const { open, updateLoading, toggle, handleSubmit,err } = useUpdateUser({
    id,
    fetchData,
    currentPage,
  });

  return (
    <>
      <Button type="button" onClick={toggle} color="warning">
        Update
      </Button>
      <Modal show={open} onHide={toggle}>
        <Modal.Header closeButton>Update User - {item}</Modal.Header>
        <Form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px" }}>
            <TextInput
              field="username"
              autoComplete="firstname"
              label="UserName"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <TextInput field="email" label="Email" autoComplete="firstname" />
          </div>
          <Button onClick={toggle}>Cancel</Button>
          <Button type="submit" color="success">
            {updateLoading ? "Updating..." : "Update"}
          </Button>
        </Form>
        {err ? <span style={{color: "red"}}>{err}</span>: null}
      </Modal>
    </>
  );
};

export default UpdateUser;
