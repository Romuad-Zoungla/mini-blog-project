import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Crée un AbortController pour gérer l'annulation de la requête
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Requête annulée");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }; 

    setTimeout(() => {
      fetchData();
    }, 2000);

    // Nettoyage lors du démontage ou avant l'exécution d'un nouvel effet
    return () => controller.abort();
  }, [url]); // Déclenche l'effet lorsque l'URL change

  return { data, loading, error };
};

export default useFetch;
