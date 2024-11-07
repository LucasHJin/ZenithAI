// Function to find studies based on key terms
const searchPMC = async (query) => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term=${encodeURIComponent(query)}&retmode=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.esearchresult.idlist;
};

// Function to get summary (metadata) about study
const getPMCArticleSummary = async (idList) => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pmc&id=${idList.join(",")}&retmode=json`;
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
};

// Function to get full text from study
const fetchFullText = async (idList) => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=${idList.join(",")}&retmode=xml`;
    const response = await fetch(url);
    return await response.text();
};

// Main function combining all above
const searchAndFetchPMC = async (searchTerm) => {
    try {
        const ids = await searchPMC(searchTerm);
        if (ids.length > 0) {
        const summaries = await getPMCArticleSummary(ids);
        console.log("Article Summaries:", summaries);
        const fullText = await fetchFullText(ids);
        console.log("Full Text Articles:", fullText);
        } else {
        console.log("No articles found for this query.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { searchAndFetchPMC };
