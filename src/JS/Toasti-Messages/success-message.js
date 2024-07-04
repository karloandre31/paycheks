import { Bounce, toast } from "react-toastify";

const toastiSuccess = (message = "All is good") => {
  return toast.success(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
export default toastiSuccess;
