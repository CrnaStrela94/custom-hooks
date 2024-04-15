import { useEffect, useState } from "react";
type DuckData = {
  url: string;
  message: string;
};

export const useFetch = () => {
  const [data, setData] = useState<DuckData | null>(null);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/v2/random"
    )
      .then((response) => response.json())
      .then((data: DuckData) => {
        setData(data);
      });
  }, []);

  return data;
};
