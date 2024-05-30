"use client";
import { useState, useEffect } from "react";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

export default function Repositorios() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.github.com/users/dotyocode/repos"
        );
        const repo: DataProps[] = await response.json();
        setTimeout(() => {
          setData(repo);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Página repositorios</h1>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio: </strong> <a href={item.url}>{item.name}</a>
          <br />
        </div>
      ))}
    </div>
  );
}
