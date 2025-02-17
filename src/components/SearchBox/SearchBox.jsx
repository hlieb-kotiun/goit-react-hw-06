import { useId } from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  const searchInputId = useId();

  const handleClick = (e) => {
    onFilter(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={s.input}
        onChange={handleClick}
        type="text"
        id={searchInputId}
        name="name"
      />
    </div>
  );
};

export default SearchBox;
