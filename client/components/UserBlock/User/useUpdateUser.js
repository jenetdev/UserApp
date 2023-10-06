import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useUpdateUser = ({ id, fetchData, currentPage }) => {
  const [open, setOpen] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [err,setErr] = useState("")
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = (formValues) => {
    if (
      !formValues?.values?.username  &&
      !formValues?.values?.email 
    ) {
      setErr("You have to enter any field to edit either username or email");
    } else {
      setUpdateLoading(true);
      setErr(null)
      const newData = {
        data: {
          username: formValues?.values?.username,
          email: formValues?.values?.email,
        },
      };
      axios
        .put(`http://localhost:1337/api/users-apis/${id}`, newData)
        .then((response) => {
          console.log("Updated successfully:", response.data);
          toggle();
          fetchData(
            `http://localhost:1337/api/users-apis?pagination[page]=${currentPage}&pagination[pageSize]=5`
          );
          toast.success("User details Updated");
          setUpdateLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error(error?.message)
        });
    }
  };

  return { open, updateLoading, toggle, handleSubmit,err };
};
export default useUpdateUser;
