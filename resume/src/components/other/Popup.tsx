import React from "react";

const Popup = (message: string) => {
  return (
    <div className="w-24 h-12 flex text-center border-2 border-primary-color">
      {message}
    </div>
  );
};

export default Popup;
