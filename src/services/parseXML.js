const parseArticleXML = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const title = xmlDoc.querySelector("article-title")?.textContent;

    const authors = Array.from(xmlDoc.querySelectorAll("contrib[contrib-type='author'] name"))
        .map(author => `${author.querySelector("given-names")?.textContent} ${author.querySelector("surname")?.textContent}`);

    const abstract = xmlDoc.querySelector("abstract p")?.textContent;

    // Metadata
    const publishDate = xmlDoc.querySelector("pub-date year")?.textContent;
    const source = xmlDoc.querySelector("journal-title")?.textContent;
    const volume = xmlDoc.querySelector("volume")?.textContent;
    const issue = xmlDoc.querySelector("issue")?.textContent;
    const doi = xmlDoc.querySelector("article-id[pub-id-type='doi']")?.textContent;

    // Main content (body)
    const sections = Array.from(xmlDoc.querySelectorAll("body sec")).map(section => {
        const sectionTitle = section.querySelector("title")?.textContent;
        const paragraphs = Array.from(section.querySelectorAll("p")).map(p => p.textContent);
        return { sectionTitle, paragraphs };
    });

    const references = Array.from(xmlDoc.querySelectorAll("ref-list ref citation"))
        .map(ref => ref.textContent);

    return {
        title,
        authors,
        abstract,
        publishDate,
        source,
        volume,
        issue,
        doi,
        sections,
        references
    };
};

export { parseArticleXML };
