import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const useUserBlock = () => {
 // const sesn = localStorage.getItem("user");


  let sesn
  if (typeof window !== 'undefined') {
    // Check if localStorage is available before using it
    sesn =localStorage.getItem("user");
    // Now you can safely use localStorage here
  }

  const [currentPage, setCurrentpage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const[error,setError]= useState('')
  const [users, setusers] = useState([]);
  const router = useRouter();
  const totalCount = users?.meta?.pagination?.total;
  const pageSize = users?.meta?.pagination?.pageSize;
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const fetchData = (url) => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setusers(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error?.message);
        setError(error?.message)
      });
  };

  useEffect(() => {
    fetchData(
      `http://localhost:1337/api/users-apis?pagination[page]=${currentPage}&pagination[pageSize]=5`
    );
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageSize) {
      setCurrentpage(currentPage + 1);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  useEffect(() => {
    if (!sesn) {
      router.push("/");
    }
  }, [sesn]);

  return {
    handleLogout,
    handleNext,
    totalPageCount,
    handlePrevious,
    pageSize,
    isLoading,
    sesn,
    currentPage,
    setCurrentpage,
    fetchData,
    users,
    error
  };
};

export default useUserBlock;
