"use client";

import { ReactDOM, useState } from "react";
import Image from "next/image";
interface OwnerRepoProps {
  avatar_url: string;
  name: string;
}

const OwnerRepo = ({ avatar_url, name }: OwnerRepoProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && (
        <>
          <Image
            src={avatar_url}
            alt="Foto avatar usuario"
            width={35}
            height={35}
            style={{ borderRadius: 10 }}
          />
          <strong>{name}</strong>
        </>
      )}
      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar nome" : "Exibir nome"}
      </button>
    </div>
  );
};

export default OwnerRepo;
