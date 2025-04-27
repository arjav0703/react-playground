"use client";
import { Usertype } from "@/utils";
import axios from "axios";
import { useState } from "react";

const UserPage = () => {
  const [user, setuser] = useState<Usertype[]>([]);
  const getusers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setuser(res.data);
  };
  return (
    <div>
      <button onClick={getusers}>get users</button>
      <div>
        {user.map((usmap) => {
          return <div key={usmap.id}>{usmap.username}</div>;
        })}
      </div>
    </div>
  );
};

export default UserPage;
