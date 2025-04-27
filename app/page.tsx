"use client";
import { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
          placeholder="Enter your name"
          className="border-2 border-zinc-600 px-4 py-2 text-xl rounded-lg ring-2 ring-zinc-600"
        />
      </form>
    </>
  );
};

export default page;
