import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const diffToast = () => {
        toast.success("Activity Completed!", {
          position: "top-right",
          autoClose: 3000
        });
      };
      return (
            <div>
                <button className="btn btn-primary w-100 mt-5" onClick={diffToast}>
                    Activity Completed
                </button>
        
            <ToastContainer />
            </div>
        );   
};

export default Toast;