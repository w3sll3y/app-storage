import LoginPage from "@/pages/login";
import ProfilePage from "@/pages/profile";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(false);

  return (
    <>
      {
        user ? (
          <ProfilePage />
        ) : <LoginPage />
      }
    </>
  )
}