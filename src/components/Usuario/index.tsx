import { useState } from "react";

interface User {
  uid: String;
  name: String;
}

const Usuario = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: "ABC123",
      name: "andres camilo plaza",
    });
  };

  return (
    <div>
      <h3>usuario: useState</h3>
      <button onClick={login}>Login</button>
      {!user ? <h4>No esta logeado</h4> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default Usuario;
