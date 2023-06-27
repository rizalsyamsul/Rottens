import { useEffect, useState } from "react";

export default function useFetch(prefix) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://localhost:3000/";
  useEffect(() => {
    fetch(baseUrl + prefix)
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong");
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading };
}
