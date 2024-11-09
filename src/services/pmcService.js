import { parseArticleXML } from "./parseXML";

// Function to find studies based on key terms

// retstart = start page, restmax = number of results (for pageination)
const searchPMC = async (query, retstart = 0, retmax = 20) => {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pmc&term=${encodeURIComponent(query)}&retmode=json&retstart=${retstart}&retmax=${retmax}`;
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
            // Fetch metadata summaries (gives ids, authors, dates, titles, etc.)
            const summaries = await getPMCArticleSummary(ids);
            console.log("Article Summaries:", summaries);

            // Get string with all XML data for all request articles
            const fullTextXML = await fetchFullText(ids);
            
            // Parse all articles into 1 big XML Document (to be able to traverse + query)
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(fullTextXML, "text/xml");

            // Parse individual article's XML (using <article> element)
            const articles = Array.from(xmlDoc.querySelectorAll("article")).map(articleXML => {
                // Convert back to XML string
                const xmlString = new XMLSerializer().serializeToString(articleXML);
                return parseArticleXML(xmlString);  // Get data from article
            });

            // Testing for all detail information
            articles.forEach((article, index) => {
                console.log(`\nArticle ${index + 1}:`);
                console.log("Title:", article.title);
                console.log("Authors:", article.authors.join(", "));
                console.log("Abstract:", article.abstract);
                console.log("Publish Date:", article.publishDate);
                console.log("Source:", article.source);
                console.log("Volume:", article.volume);
                console.log("Issue:", article.issue);
                console.log("DOI:", article.doi);
                console.log("Sections:");
                article.sections.forEach((section, secIndex) => {
                    console.log(`  Section ${secIndex + 1} - ${section.sectionTitle}:`);
                    section.paragraphs.forEach((paragraph, paraIndex) => {
                        console.log(`    Paragraph ${paraIndex + 1}: ${paragraph}`);
                    });
                });
                console.log("References:", article.references.join("; "));
            });
        } else {
            console.log("No articles found for this query.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { searchAndFetchPMC };
