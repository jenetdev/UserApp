import { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";

const apiUrl = "http://localhost:1337/api/users-apis";

const useCreateUser = ({fetchData,currentPage}) => {

    const [isOpen, setIsOpen] = useState(false);
    const validateRequired = (value) => {
      return !value ? "This field is required" : null;
    };
  
    const toggle = () => {
      setIsOpen((prev) => !prev);
    };
  
    const handleSubmit = (formValues) => {
      const userName = formValues?.values?.username;
      const email = formValues?.values?.email;
      const password = formValues?.values?.password;
  
      const postData = {
        data: {
          username: userName ? userName : null,
          email: email ? email : null,
          password: password ? password : null,
        },
      };
  
      axios
        .post(apiUrl, postData)
        .then((response) => {
          toggle();
          fetchData(`http://localhost:1337/api/users-apis?pagination[page]=${currentPage}&pagination[pageSize]=5`)
          toast.success("User created Successfully")
          //console.log("Response data:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error(error?.message)
        });
    };
  

return {isOpen,validateRequired,toggle,handleSubmit}
}
export default useCreateUser