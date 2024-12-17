import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/Literature.css'
import Card from '../components/Card'
import { getStudyData, getTotalStudyCount } from '../services/firebaseAdmin'

function Literature() {
  const [allStudyData, setAllStudyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [lastDocs, setLastDocs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 1;
  
  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (page) {
      setCurrentPage(parseInt(page)); 
    }
  }, [page]); 

  const fetchStudies = async (page = 1) => {
    setLoading(true);
    try {
      const lastDoc = page > 1 ? lastDocs[page - 2] : null;
      const { studies, lastDoc: newLastDoc } = await getStudyData(itemsPerPage, lastDoc);
      setLastDocs((prev) => {
        const updated = [...prev];
        updated[page - 1] = newLastDoc; 
        return updated;
      });
      setAllStudyData(studies);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    fetchStudies(currentPage);  
  }, [currentPage]);  

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
