import React from "react";

const Background = ({ children }) => {
  return (
    <body className="bg-white dark:bg-black transition-all h-full">{children}</body>
  );
};

export default Background;
