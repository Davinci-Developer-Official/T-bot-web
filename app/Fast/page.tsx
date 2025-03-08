"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://t-bot-9tpu.onrender.com/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>FastAPI Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
