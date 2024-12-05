import { React, useState, useEffect } from "react";
import '../styles/Literature.css'
import Card from '../components/Card'
import { getStudyData } from '../services/firebaseAdmin'
import ReactPaginate from "react-paginate";

// MAKE PAGINEATION
// Add searching later

function Literature() {
  const [allStudyData, setAllStudyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  

  const getData = async () => {
    try {
      const data = await getStudyData();
      setAllStudyData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Show cards when component mounts
    getData();
  }, []);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search studies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="cards">
        {allStudyData.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} date={item.publishDate} description={item.abstract} source={item.doi} info={item} className="individual-card"/>
        ))}
      </div>

      <div className="page-numbers">
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLabel={"«"}
          nextLabel={"»"}
          breakLabel={"..."}
        />
      </div>

    </>
  );
}

export default Literature;