import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import useDeleteUser from "./useDeleteUser";

const DeleteUser = ({ id, item, fetchData, setCurrentpage, currentPage }) => {
  const { open, toggle, handleDelete } = useDeleteUser({
    id,
    fetchData,
    setCurrentpage,
    currentPage,
  });

  return (
    <>
      <Button onClick={toggle} color="danger">
        Delete
      </Button>
      <Modal show={open} onHide={toggle}>
        <Modal.Header closeButton>Delete User</Modal.Header>
        Are you sure you want to delete the user {item}?
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteUser;
