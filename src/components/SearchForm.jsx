const SearchForm = ({ onSearch}) => {
    return(
        <form className="search-form" onSubmit={(e) => e.preventDefault}>
            <input 
                type="name"
            />
        </form>
    )
};

export default SearchForm;