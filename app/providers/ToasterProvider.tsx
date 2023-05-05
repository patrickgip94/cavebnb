"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;

// Needed to create a seperate component because Toaster is a foreign tool.
// This provider prevents a errors from happening.
