import React, { useState, useEffect } from 'react';

const DataApi = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        {items.map(item => (
          <table key={item.id}>
            <td><h2>{item.userId}</h2></td>
            <td><h2>{item.title}</h2></td>
          </table>
        ))}
      </>
    );
  }
}
export default DataApi;