"use client";
import { Usertype } from "@/utils";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserPage = () => {
  const [user, setuser] = useState<Usertype[]>([]);
  const getusers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res.data);
    setuser(res.data);
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <div className="mx-auto max-w-10/12">
      <ul>
        {user.map((usmap) => {
          return (
            <li key={usmap.id}>
              {usmap.username} --- {usmap.email} ----{" "}
              <Link href={`/users/${usmap.id}`}>More details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPage;
