const SearchForm = ({ onSearch }) => {
    return (
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search by name or specialty..."
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>
    );
  };
  
  export default SearchForm;