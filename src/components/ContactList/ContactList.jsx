import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.listItem} key={id}>
            <Contact
              onDelete={onDelete}
              contacts={contacts}
              id={id}
              name={name}
              number={number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
