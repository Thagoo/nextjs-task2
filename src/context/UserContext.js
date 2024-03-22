"use client";
import { fetchUsersList } from "@/lib/data";
import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const useData = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchUsersList();

      if (data.length > 1) {
        setData(data);
        setLoading(false);
      } else {
        setError(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ loading, error, data, currentUser, setCurrentUser, fetchData }}
    >
      {children}
    </UserContext.Provider>
  );
};
