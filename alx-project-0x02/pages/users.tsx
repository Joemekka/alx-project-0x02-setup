import React, { useEffect, useState } from "react";
import { UseProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

const Users: React.FC = () => {
  const [users, setPosts] = useState<UseProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.org/users");
        const data: UseProps[] = await res.json();
        console.log(data);
        setPosts(data.slice(0, 10)); // show only first 10 posts
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
};
export default Users;
