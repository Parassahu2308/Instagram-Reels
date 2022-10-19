import { useRouter } from "next/router";
import React, { useContext } from "react";
import Profile from "../Components/Profile";
import { AuthContext } from "../context/auth";

function profile() {
  const { user } = useContext(AuthContext);

  const Redirect = () => {
    const router = useRouter();
    console.log("login");
    router.push("/login");
  };

  return (
    //this component will only be visible when we ar elogged in
    <>{user?.uid ? <Profile /> : <Redirect />}</>
  );
}

export default profile;
