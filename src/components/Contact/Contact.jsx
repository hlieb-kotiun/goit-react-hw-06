import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.wrapper}>
        <span className={s.span}>
          <FaUser />
          {name}
        </span>
        <span className={s.span}>
          <FaPhone />
          {number}
        </span>
      </div>
      <button className="" onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
