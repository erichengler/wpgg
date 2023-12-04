import "./SortBy.css";

function SortBy({ sortCriteria, setSortCriteria, sortOrder, setSortOrder }) {

  const handleSortBy = (criteria) => () => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  return (
    // Sort By Filter
    <div className="filter">
      <span className="filter-text" onClick={handleSortBy("name")}>
        Name {sortCriteria === "name" && (sortOrder === "asc" ? "▲" : "▼")}
      </span>{" "}
      &nbsp;| &nbsp;
      <span className="filter-text" onClick={handleSortBy("hours")}>
        Hours {sortCriteria === "hours" && (sortOrder === "asc" ? "▲" : "▼")}
      </span>{" "}
      &nbsp;| &nbsp;
      <span className="filter-text" onClick={handleSortBy("playing")}>
        Currently Playing{" "}
        <span className={sortOrder === "asc" ? "filter-no" : "filter-yes"}>
          {sortCriteria === "playing" && (sortOrder === "asc" ? "❌" : "✔")}
        </span>
      </span>
    </div>
  );
}

export default SortBy;
