import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteUser = ({ id, fetchData, setCurrentpage, currentPage }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleDelete = () => {
    //console.log(id, "idd");

    axios
      .delete(`http://localhost:1337/api/users-apis/${id}`)
      .then((response) => {
        //console.log("Deleted successfully:", response.data);
        toggle();
        fetchData(
          `http://localhost:1337/api/users-apis?pagination[page]=${currentPage}&pagination[pageSize]=5`
        );
        toast.success("User removed successfully");
        setCurrentpage(1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return { open, toggle, handleDelete };
};

export default useDeleteUser;
