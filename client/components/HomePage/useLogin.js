import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();

  const handleSubmit = (formValues) => {
    if (
      formValues?.values?.email === "admin@gmail.com" &&
      formValues?.values?.password === "admin123"
    ) {
      router.push("/users");
      localStorage.setItem("user", "admin");
      toast.success('login successFull')
    } else if (
      formValues?.values?.email === "user@gmail.com" &&
      formValues?.values?.password === "user123"
    ) {
      router.push("/users");
      localStorage.setItem("user", "common");
      toast.success('login successFull')
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return { handleSubmit };
};

export default useLogin;
