const BACKEND_URL = "http://localhost:4000/api/studies"; // Backend API base URL to access routes

async function writeStudy(studyData) {
  if (!studyData.title) {
    console.error("Error: 'title' is required in studyData.");
    return;
  }

  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studyData),
    });

    if (!response.ok) {
      throw new Error("Failed to add study");
    }

    const data = await response.json();
    console.log("Study added successfully with ID:", data.id);
  } catch (error) {
    console.error("Error adding study:", error.message);
  }
}

async function getStudyData(batchSize=1, page=1) {
  try {
    const response = await fetch(
      `${BACKEND_URL}?batchSize=${batchSize}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch studies");
    }

    const data = await response.json();
    return { studies: data.studies };
  } catch (error) {
    console.error("Error retrieving studies:", error.message);
    throw error;
  }
}

async function getTotalStudyCount() {
  try {
    const response = await fetch(`${BACKEND_URL}/count`);

    if (!response.ok) {
      throw new Error("Failed to fetch total study count");
    }

    const data = await response.json();
    return data.total;
  } catch (error) {
    console.error("Error fetching total study count:", error.message);
    return 0;
  }
}

export { writeStudy, getStudyData, getTotalStudyCount };
