"use client";
import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;

// PREVENTS ANY HYDRATION ERROR WITH NEXTJS

// HYDRATION DEFINITION

// Hydration is the process of using client-side
// JavaScript to add application state and interactivity to server-rendered HTML.
