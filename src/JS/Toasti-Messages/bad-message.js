import { Bounce, toast } from "react-toastify";

const toastiError = (message = "Pasó algo mal") => {
  return toast.error(message, {
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
export default toastiError;
