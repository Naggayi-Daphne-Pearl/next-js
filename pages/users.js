import React from "react";
import User from "@/components/user";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

// getStaticProps runs on server side. will never run on client side
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  // returns objects
  return {
    props: {
      users: data,
    },
  };
}
