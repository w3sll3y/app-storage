import { useState } from "react";
import LoginPage from "./login";

export default function Profile() {
  const [user, setUser] = useState(false);

  return (
    <>
      {
        user ? (
          null
          // <ProfilePage />
        ) : <LoginPage />
      }
    </>
  )
}