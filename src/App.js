import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./components/Auth/react-auth0-spa";
function App({ idToken }) {
  console.log(idToken);
  const { loading, logout } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar logoutHandler={logout} />
    </div>
  );
}

export default App;
