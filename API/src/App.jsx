import { useEffect, useState } from "react";
import "./App.css";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>User List</h2>

      {users.map((user) => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}

    </>
  );
}