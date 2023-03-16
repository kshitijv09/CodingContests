import React, { useState, useEffect, useCallback } from "react";

import ContestList from "./components/ContestList";
import "./App.css";

function App() {
  const [contests, setContests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchContestsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://kontests.net/api/v1/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setContests(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchContestsHandler();
  }, [fetchContestsHandler]);

  let content = <p>Found no contests.</p>;

  if (contests.length > 0) {
    content = <ContestList list={contests} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <h2 className="heading"> List of Coding Contests</h2>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
