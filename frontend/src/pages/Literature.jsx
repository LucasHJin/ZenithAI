import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/Literature.css'
import Card from '../components/Card'
import { getStudyData, getTotalStudyCount } from '../services/acessDB'

function Literature() {
  const [allStudyData, setAllStudyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 1;
  
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Only run it once totalPages has loaded
    if (totalPages === 0) return;
    //console.log(totalPages);
    //console.log(page);
    const pageNum = parseInt(page);
    if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
      // Redirect if invalid page
      navigate('/invalid');
    } else {
      // Set currentPage to url page number
      setCurrentPage(pageNum);
    }
    console.log("Current page (URL change): ", page);
  }, [page, totalPages, navigate]); 

  // Fetch studies when currentPage is updated ^ 
  useEffect(() => {
    if (currentPage && parseInt(page)===currentPage) { // Need both an updated currentPage and for that to be the same as the page link number so that it doesn't rerender over the desired content
      console.log("PAGE UPDATED: Fetching data for page:", currentPage);
      fetchStudies(currentPage);  
    }
  }, [currentPage, page]); 

  const fetchStudies = async (page = 1) => {
    setLoading(true);
    try {
      console.log("Fetching data for page:", page);
      const { studies } = await getStudyData(itemsPerPage, page); 
      setAllStudyData(studies); 
    } catch (error) {
      console.error("Error fetching studies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      const totalCount = await getTotalStudyCount();
      const pages = Math.ceil(totalCount / itemsPerPage);
      setTotalPages(pages); 
    };

    initialFetch();
  }, []);  // Only run on initial mount to calculate total pages

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
  };

  const handlePageChange = async (pageNum) => {
    setCurrentPage(pageNum); 
    navigate(`/literature/${pageNum}`); 
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
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.publishDate}
            description={item.abstract}
            source={item.doi}
            info={item}
            className="individual-card"
          />
        ))}
      </div>

      <div className="page-numbers">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNum) => (
          <button
            key={pageNum + 1}
            className={pageNum + 1 === currentPage ? "active" : ""}
            onClick={() => handlePageChange(pageNum + 1)}
          >
            {pageNum + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Literature;
