import { useState, useEffect } from "react";
import { ContactsTable } from "./ContactsTable";

const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getContacts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=200");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setData(results);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);
  return {
    data,
    isLoading,
    isError,
  };
};

export const Contacts = () => {
  const contacts = useContacts();

  if (contacts.isLoading) {
    return <div>loading...</div>;
  }
  if (contacts.isError) {
    return <div>...error</div>;
  }
  return (
    <div className="container">
      <h1>Contacts</h1>
      <ContactsTable contacts={contacts.data} />
    </div>
  );
};
