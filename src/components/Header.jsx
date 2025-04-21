import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Redux state for user

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen top-0 left-0 p-5 z-10 bg-gradient-to-b from-black flex justify-between">
      <img
        src="https://www.svgrepo.com/show/354108/netflix.svg"
        alt="Netflix Icon"
        className="w-28"
      />

      {user ? ( // Only display user details if user exists
        <div className="flex items-center space-x-4">
          <img
            alt="usericon"
            src={
              user.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            className="w-12 h-12"
          />
          <span className="text-white">{user.displayName}</span>{" "}
          {/* Display user's name */}
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-white"></div> // Show loading message if user isn't available
      )}
    </div>
  );
};

export default Header;
