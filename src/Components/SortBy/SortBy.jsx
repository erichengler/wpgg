import "./SortBy.css";

function SortBy({ sortCriteria, setSortCriteria, sortOrder, setSortOrder }) {

  // ------- Handle game list sorting -------
  const handleSortBy = (criteria) => () => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  return (
    <div className="filter">

      {/* ------- Sort by name ------- */}
      <span className="filter-text" onClick={handleSortBy("name")}>
        Name {sortCriteria === "name" && (sortOrder === "asc" ? "▲" : "▼")}
      </span>{" "}
      &nbsp;| &nbsp;

      {/* ------- Sort by hours played ------- */}
      <span className="filter-text" onClick={handleSortBy("hours")}>
        Hours {sortCriteria === "hours" && (sortOrder === "asc" ? "▲" : "▼")}
      </span>{" "}
      &nbsp;| &nbsp;

      {/* ------- Sort by currently playing ------- */}
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
