import { useState, useEffect } from 'react';

function VerseOfTheDay() {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://bible-api.com/john+3:16')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch verse');
        return res.json();
      })
      .then((data) => setVerse(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!verse) return <p>Loading verse...</p>;

  return (
    <div>
      <h2>Verse of the Day</h2>
      <p>
        <strong>{verse.reference}</strong>
      </p>
      <p>{verse.text}</p>
    </div>
  );
}

export default VerseOfTheDay;
