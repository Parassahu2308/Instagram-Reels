import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
// import user from "../assests/man.png";
import { AuthContext } from "../context/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { Avatar } from "@mui/material";

function Profile() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [postIds, setPostsIds] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    console.log("user", user);
    //read the user info from db
    const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
      console.log("Current data: ", doc.data());
      setUserData(doc.data());
      setPostsIds(doc.data().posts);
    });
    return () => {
      unsub();
    };
  }, [user]);

  //get post videos of profile
  useEffect(() => {
    let tempArr = [];
    postIds.map((pId) => {
      const unsub = onSnapshot(doc(db, "posts", pId), (doc) => {
        console.log("Current data: ", doc.data());
        tempArr.push(doc.data());
        setUserPosts([...tempArr]);
      });
    });
  }, [postIds]);

  return (
    <div>
      <Navbar userData={userData} />
      <div>
        <div className="profile-intro">
          <div>
            <Avatar
              alt={userData.fullName}
              src={userData.downloadURL}
              sx={{ margin: "0.5rem", height: "8rem", width: "8rem" }}
            />
          </div>
          <div>
            <h1>{userData.fullName}</h1>
            <h1>Posts:{postIds.length}</h1>
          </div>
        </div>
        <hr />
        <div className="profile-posts">
          {userPosts.map((post) => (
            <video src={post.postURL}></video>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
