import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";

const App = () => {
  const contactList = JSON.parse(localStorage.getItem("contacts")) || [];

  const [contacts, setContacts] = useState(contactList);

  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addUser = (newUser) => {
    setContacts([...contacts, newUser]);
  };

  const deleteTask = (taskId) => {
    setContacts((prevTasks) => {
      return prevTasks.filter((contact) => contact.id !== taskId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filtered} onDelete={deleteTask} />
    </div>
  );
};

export default App;
