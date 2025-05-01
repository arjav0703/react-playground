"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user details.");
      } finally {
        setLoading(false);
      }
    }

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>ID: {user?.id}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
    </div>
  );
}
