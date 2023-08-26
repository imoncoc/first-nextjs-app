"use client";

import React from "react";

const Template = ({ children }) => {
    console.log("From Template layout");

  return (
    <div>
     
      {children}
    </div>
  );
};

export default Template;
