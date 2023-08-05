import React, { useState, useEffect } from "react";
import "../../style/Popup.css";
import Form from "./Form";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // Đặt thời gian chờ là 5 giây (5000ms)
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Xóa timeout khi component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup__content">
            <span onClick={togglePopup} className="popup__close-btn">
              &times;
            </span>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
