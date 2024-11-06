const Filter = (props) => {
  return (
    <form className="filterForm">
      Find countries:
      <input value={props.searchTerm} onChange={props.handleSearchChange} />
    </form>
  );
};

export default Filter;
