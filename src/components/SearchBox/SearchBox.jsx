import css from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="searchContact"
        placeholder="Enter search name"
        value={value}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
