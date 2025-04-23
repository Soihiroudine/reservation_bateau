import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notification = (msg, type = "default") => {
    const options = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "light"
    };
  
    switch (type) {
      case "success":
        toast.success(msg, options);
        break;
      case "error":
        toast.error(msg, options);
        break;
      case "warn":
        toast.warn(msg, options);
        break;
      case "info":
        toast.info(msg, options);
        break;
      default:
        toast(msg, options);
    }
  };